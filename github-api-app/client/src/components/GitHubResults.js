//GitHubResults.js
import React from "react";
import Card from "react-bootstrap/Card"; // Importing Card component from react-bootstrap

// Component for GitHubResults, receiving props: userProfiles, gitHubAvatar, gitHubName, gitHubProfileLink, gitHubBio, searchName, gitHubRepoData, loadingRepos
export default function GitHubResults({
  userProfiles, // Array containing user profiles data from GitHub and GitLab
  gitHubAvatar, // URL for GitHub user's Profile Image
  gitHubName, // GitHub username
  gitHubProfileLink, // Link to GitHub user's profile
  gitHubBio, // Bio information of GitHub user
  searchName, // Username being searched
  gitHubRepoData, // Data containing GitHub repositories and commits
  loadingRepos, // Boolean indicating if repositories are loading or not
}) {
  // If userProfiles is not yet defined (initial state) returns an empty paragraph
  if (!userProfiles) {
    return <p></p>;
  }
  // If userProfiles is defined but userFound for GitHub (index 0) is false
  else if (userProfiles[0].userFound === false) {
    // Renderes a message indicating no user found on GitHub for the searched name
    return (
      <div className="my-5">
        <h3>There are no users with the name {searchName} on GitHub.</h3>
      </div>
    );
  }
  // If userProfiles is defined and the userFound for GitHub (index 0) is true
  else {
    // Renderes a card component displaying GitHub user's information and repositories
    return (
      <div>
        <Card className="resultsCard">
          <Card.Body>
            {/* Displays GitHub user's profile image and profile link */}
            <Card.Title className="py-2 fs-2 d-flex align-items-center justify-content-center">
              <Card.Img
                variant="bottom"
                className="rounded-circle w-25"
                src={gitHubAvatar}
              />
              {/* Displays GitHub user's name as a link to their profile */}
              &nbsp;&nbsp;
              <Card.Link
                className="profileName"
                href={gitHubProfileLink}
                target="blank"
              >
                {gitHubName}
              </Card.Link>
            </Card.Title>
            {/* Display GitHub user's biography */}
            <Card.Subtitle className="pt-3 px-4 text-muted">
              {gitHubBio}
            </Card.Subtitle>
          </Card.Body>
          <Card.Body>
            {/* Section heading for repositories and commits */}
            <Card.Title className="reposHeading">
              Latest Repos & Commits
            </Card.Title>
            {/* Displays a loading message if the repositories are loading otherwise it displays the GitHub repository data */}
            {loadingRepos ? <p>Repos Loading...</p> : gitHubRepoData}
          </Card.Body>
        </Card>
      </div>
    );
  }
}
