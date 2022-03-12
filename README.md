# GDSC-BSUM-OCRS
BSUM(Benue State University Makurdi) OCRS(Online Crime Reporting System ) is a quick crime response app, where security personnels on campus get real time notification on crime aler. It's an open source projects for the GDSC community developers.


# Contributing
Read the contributing.md file to catch a glimpse of how to contribute to this project. Bug reports and pull requests are welcome on GitHub at github.com/Dankummzy/GDSC-BSUM-OCRS 


# Pull Request Process
# 1. FORK THIS REPO
Fork this repository by clicking on the Fork button at the top right corner of this page.

Forking the repository, simply means copying the repository or project to your own github account.

# 2. CLONE THIS REPO
Cloning the repository means downloading the project from github to your local system, so you can make changes.

To do this, go into the forked copy of the repository on your personal Github account and click on the Code button
Copy the HTTPS link, SSH and Github CLI are also available options but we are using HTTP for this example
Then open your terminal and enter the following code
git clone PASTE-COPIED-LINK

Replace all uppercase text with your details.

In my case, it would be

git clone https://github.com/dankummzy/gdsc-bsum-ocrs.git

replace dankummzy with your github username

# 3. CREATE A BRANCH
Create a branch and make your changes to that branch, this makes it so that each contributor works on a separate branch and only commit to master when their code has been approved.

Enter the follwing code to create a branch.

git branch YOUR-BRANCH-NAME

An Example of this would be;

git branch my-contribution

Then switch to the branch with the checkout command:

git checkout YOUR-BRANCH-NAME

An example of this would be;

git checkout my-contribution

Your branch name should be short and descriptive so be creative and also, the maintainer might have a convention for naming branches. Which is why, it is important that you go through the CONTRIBUTING.md file at the beginning.

# 4. MAKE CHANGES
Goto the Contributors.md file and make your changes
Add your Fullname and twitter handle to the list
After Successfully adding and saving your details. Open up your terminal and enter the following commands line by line.

This is an example for an login button

git add login.html or git add .
git commit -m 'add a login button'
git push origin YOUR-BRANCH-NAME
git add this command adds the file in which changes have been made to the staging area.
git commit -m saves the changes you have made to repo locally with a message.
git push origin uploads the changes you have made to the remote repository (github).


# 6. CREATE A PULL REQUEST
Now, immediately after you push your changes to remote, github will prompt you to make a pull request.
And you make a pull request by clicking on the Compare & Pull Request button
Then enter a title and description, and again your title should be descriptive.
Finally, click on Create Pull Request
You've just contributed to this project, wait until your pull request is merged.
# Licence
The project is available as open source under the terms of the MIT License
