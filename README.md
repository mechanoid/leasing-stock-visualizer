# leasing-stock-visualizer

A simple tool to visualize your consumed leasing capabilities, so you may see in an clear and concise way,
how much kilometers you can spent in the rest of your leasing time.

## server

The server is a simple rails app, that serves and saves data to a sqlite3 database. The leasing stock visualizer
is not dedicated to run in production now, so sqlite3 does fit our needs.

### install

Install ruby (tested with 2.2.3) e.g. via binary, homebrew or recommended via tools like rvm, rbenv, and similar.
After having a ruby version installed and running (`ruby -v` should deliver a valid version number without errors),
you should install *bundler*, by running `gem install bundler` (depending on your ruby installation it may be necessary,
to prefix your command with `sudo`).

### running

Simply run the server by starting it via `rails server`.
