import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import Modal from 'react-modal';
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
      data: [{
        "id": 16746719,
        "name": "hellosign-java-sdk",
        "full_name": "HelloFax/hellosign-java-sdk",
        "owner": {
          "login": "HelloFax",
          "id": 584908,
          "avatar_url": "https://avatars3.githubusercontent.com/u/584908?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/HelloFax",
          "html_url": "https://github.com/HelloFax",
          "followers_url": "https://api.github.com/users/HelloFax/followers",
          "following_url": "https://api.github.com/users/HelloFax/following{/other_user}",
          "gists_url": "https://api.github.com/users/HelloFax/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/HelloFax/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/HelloFax/subscriptions",
          "organizations_url": "https://api.github.com/users/HelloFax/orgs",
          "repos_url": "https://api.github.com/users/HelloFax/repos",
          "events_url": "https://api.github.com/users/HelloFax/events{/privacy}",
          "received_events_url": "https://api.github.com/users/HelloFax/received_events",
          "type": "Organization",
          "site_admin": false
        },
        "private": false,
        "html_url": "https://github.com/HelloFax/hellosign-java-sdk",
        "description": "A Java SDK for the HelloSign API.",
        "fork": false,
        "url": "https://api.github.com/repos/HelloFax/hellosign-java-sdk",
        "forks_url": "https://api.github.com/repos/HelloFax/hellosign-java-sdk/forks",
        "keys_url": "https://api.github.com/repos/HelloFax/hellosign-java-sdk/keys{/key_id}",
        "collaborators_url": "https://api.github.com/repos/HelloFax/hellosign-java-sdk/collaborators{/collaborator}",
        "teams_url": "https://api.github.com/repos/HelloFax/hellosign-java-sdk/teams",
        "hooks_url": "https://api.github.com/repos/HelloFax/hellosign-java-sdk/hooks",
        "issue_events_url": "https://api.github.com/repos/HelloFax/hellosign-java-sdk/issues/events{/number}",
        "events_url": "https://api.github.com/repos/HelloFax/hellosign-java-sdk/events",
        "assignees_url": "https://api.github.com/repos/HelloFax/hellosign-java-sdk/assignees{/user}",
        "branches_url": "https://api.github.com/repos/HelloFax/hellosign-java-sdk/branches{/branch}",
        "tags_url": "https://api.github.com/repos/HelloFax/hellosign-java-sdk/tags",
        "blobs_url": "https://api.github.com/repos/HelloFax/hellosign-java-sdk/git/blobs{/sha}",
        "git_tags_url": "https://api.github.com/repos/HelloFax/hellosign-java-sdk/git/tags{/sha}",
        "git_refs_url": "https://api.github.com/repos/HelloFax/hellosign-java-sdk/git/refs{/sha}",
        "trees_url": "https://api.github.com/repos/HelloFax/hellosign-java-sdk/git/trees{/sha}",
        "statuses_url": "https://api.github.com/repos/HelloFax/hellosign-java-sdk/statuses/{sha}",
        "languages_url": "https://api.github.com/repos/HelloFax/hellosign-java-sdk/languages",
        "stargazers_url": "https://api.github.com/repos/HelloFax/hellosign-java-sdk/stargazers",
        "contributors_url": "https://api.github.com/repos/HelloFax/hellosign-java-sdk/contributors",
        "subscribers_url": "https://api.github.com/repos/HelloFax/hellosign-java-sdk/subscribers",
        "subscription_url": "https://api.github.com/repos/HelloFax/hellosign-java-sdk/subscription",
        "commits_url": "https://api.github.com/repos/HelloFax/hellosign-java-sdk/commits{/sha}",
        "git_commits_url": "https://api.github.com/repos/HelloFax/hellosign-java-sdk/git/commits{/sha}",
        "comments_url": "https://api.github.com/repos/HelloFax/hellosign-java-sdk/comments{/number}",
        "issue_comment_url": "https://api.github.com/repos/HelloFax/hellosign-java-sdk/issues/comments{/number}",
        "contents_url": "https://api.github.com/repos/HelloFax/hellosign-java-sdk/contents/{+path}",
        "compare_url": "https://api.github.com/repos/HelloFax/hellosign-java-sdk/compare/{base}...{head}",
        "merges_url": "https://api.github.com/repos/HelloFax/hellosign-java-sdk/merges",
        "archive_url": "https://api.github.com/repos/HelloFax/hellosign-java-sdk/{archive_format}{/ref}",
        "downloads_url": "https://api.github.com/repos/HelloFax/hellosign-java-sdk/downloads",
        "issues_url": "https://api.github.com/repos/HelloFax/hellosign-java-sdk/issues{/number}",
        "pulls_url": "https://api.github.com/repos/HelloFax/hellosign-java-sdk/pulls{/number}",
        "milestones_url": "https://api.github.com/repos/HelloFax/hellosign-java-sdk/milestones{/number}",
        "notifications_url": "https://api.github.com/repos/HelloFax/hellosign-java-sdk/notifications{?since,all,participating}",
        "labels_url": "https://api.github.com/repos/HelloFax/hellosign-java-sdk/labels{/name}",
        "releases_url": "https://api.github.com/repos/HelloFax/hellosign-java-sdk/releases{/id}",
        "deployments_url": "https://api.github.com/repos/HelloFax/hellosign-java-sdk/deployments",
        "created_at": "2014-02-11T21:45:14Z",
        "updated_at": "2018-01-10T17:33:51Z",
        "pushed_at": "2018-01-04T22:40:39Z",
        "git_url": "git://github.com/HelloFax/hellosign-java-sdk.git",
        "ssh_url": "git@github.com:HelloFax/hellosign-java-sdk.git",
        "clone_url": "https://github.com/HelloFax/hellosign-java-sdk.git",
        "svn_url": "https://github.com/HelloFax/hellosign-java-sdk",
        "homepage": null,
        "size": 4839,
        "stargazers_count": 6,
        "watchers_count": 6,
        "language": "Java",
        "has_issues": true,
        "has_projects": true,
        "has_downloads": true,
        "has_wiki": true,
        "has_pages": false,
        "forks_count": 10,
        "mirror_url": null,
        "archived": false,
        "open_issues_count": 7,
        "license": {
          "key": "mit",
          "name": "MIT License",
          "spdx_id": "MIT",
          "url": "https://api.github.com/licenses/mit"
        },
        "forks": 10,
        "open_issues": 7,
        "watchers": 6,
        "default_branch": "master",
        "permissions": {
          "admin": false,
          "push": false,
          "pull": true
        }
      }],
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
    this.subtitle.style.color = '#000';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    let issueList = this.state.selectedRepoIssuesList.map((issue, i) => (
      <div key={i}>
        <p><a href={issue.html_url} target="_blank">{i + 1}: {issue.title}</a></p>
      </div>
    ))
    return (
      <div className="App">
        <div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Repo Details"
        >
          <p onClick={this.closeModal}>X</p>
          <h3 ref={subtitle => this.subtitle = subtitle}>{this.state.selectedRepo.name}</h3>
          <p><i>Created At:</i> {this.state.selectedRepo.created_at}</p>
          <p><i>Last Updated At:</i> {this.state.selectedRepo.updated_at}</p>
          <p><i>Repo Owner:</i> {this.state.selectedRepoOwner.login}</p>
          <p><i>Issues List:</i></p>
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