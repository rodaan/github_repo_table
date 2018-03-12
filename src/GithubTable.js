import React, { Component } from 'react';
import ReactTable from 'react-table';
import './react-table.css';
import Modal from 'react-modal';
import modalStyles from './modalStyles';
Modal.setAppElement('#root');
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    height                : '500px',
    overflow              : 'scroll'
  }
};

class GithubTable extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
      columns: [{
        Header: 'Name',
        accessor: 'name' // String-based value accessors!
      },{
        Header: 'Last Updated',
        accessor: 'updated_at'
      },{
        Header: 'Primary Language',
        accessor: 'language'
      },{
        Header: 'Number of Watchers',
        accessor: 'watchers_count'
      },{
        Header: 'Number of Forks',
        accessor: 'forks_count'
      },{
        Header: 'Number of Issues',
        accessor: 'open_issues_count'
      },{
        Header: 'Link to GitHub Repo Page',
        accessor: 'html_url'
      }],
      modalIsOpen: false,
      selectedRepo: {},
      selectedRepoOwner: {},
      selectedRepoIssuesList: [],
    }
    
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  
  componentWillMount(){
    fetch('https://api.github.com/orgs/HelloFax/repos')
      .then((response) => response.json())
      .then((responseJSON) => {
        console.log(responseJSON)
        this.setState({data: responseJSON})
      })
  }
  onRowClick = (state, rowInfo, column, instance) => {
    return {
        onClick: e => {
            if(column.Header === 'Link to GitHub Repo Page'){
              window.open(rowInfo.row.html_url, "_blank");
            } else {
              console.log(rowInfo.original.owner);
              let issuesUrl = rowInfo.original.issues_url.replace('{/number}', '');
              fetch(issuesUrl)
                .then((response) => response.json())
                .then((issuesList) => {
                  console.log(issuesList)
                  this.openModal(rowInfo.original, issuesList);
                })
            }
        }
    }
  }
  openModal(selectedRepo, issuesList) {
    this.setState({selectedRepo, selectedRepoOwner: selectedRepo.owner, selectedRepoIssuesList: issuesList}, () => {
      this.setState({modalIsOpen: true});
    });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#00b3e6';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    let issueList = this.state.selectedRepoIssuesList.map((issue, i) => (
      <div key={i}>
        <p>{i + 1}. <a href={issue.html_url} target="_blank">{issue.title}</a></p>
      </div>
    ))
    return (
      <div className="App">
        <div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={modalStyles}
          contentLabel="Repo Details"
        >
          <p className="close" onClick={this.closeModal}><b>X</b></p>
          <h3 className="repoName" ref={subtitle => this.subtitle = subtitle}>{this.state.selectedRepo.name}</h3>
          <p><b>Created At:</b> {this.state.selectedRepo.created_at}</p>
          <p><b>Last Updated At:</b> {this.state.selectedRepo.updated_at}</p>
          <p><b>Repo Owner:</b> {this.state.selectedRepoOwner.login}</p>
          <p><b>Issues List:</b></p>
          {issueList}
          <div>
          </div>
        </Modal>
        <ReactTable
          data={this.state.data}
          columns={this.state.columns}
          getTdProps={this.onRowClick}
        />
        </div>
      </div>
    );
  }
}

export default GithubTable;