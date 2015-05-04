Welcome to Happy Hour!
======================

Code climate says our code has this grade: [![Code Climate](https://codeclimate.com/repos/5544a209e30ba027fb01fcfa/badges/3eefe5c76c565286e515/gpa.svg)](https://codeclimate.com/repos/5544a209e30ba027fb01fcfa/feed)

Code climate says out test coverage is: [![Test Coverage](https://codeclimate.com/repos/5544a209e30ba027fb01fcfa/badges/3eefe5c76c565286e515/coverage.svg)](https://codeclimate.com/repos/5544a209e30ba027fb01fcfa/feed)

Our continuous integration (CI) server that runs tests automatically says: [ ![Codeship Status for Happy-Hour/HH](https://codeship.com/projects/63391e40-d3b0-0132-05cc-6a9d26101b06/status?branch=master)](https://codeship.com/projects/77681)

To set up:

1. fork from Happy-Hour/HH to your own github repo.
2. clone from your own github to your local computer.

Then set up locally:

1. configure .gitignore
2. change extension of database.yml.example to database.yml
3. configure database.yml
4. bundle install
5. Do whatever mac thing you need to do "start the elephant???".
6. rake db:create
7. rails server (or rails s)
8. go to localhost:3000 to see if it all worked.

To scrape data and populate them in db:

run ```rake scraper:scrape_data```

To delete all data in db:

run ```rake scraper:delete_all```