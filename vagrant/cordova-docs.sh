#!/usr/bin/env bash

# update system
apt-get update

# install curl
apt-get install -y curl

# install joDoc
curl -sSL https://github.com/davebalmer/joDoc/archive/master.tar.gz | tar xvz
mv joDoc-master joDoc
echo "export PATH=$PATH:~/joDoc/" >> /home/vagrant/.bashrc
source /home/vagrant/.bashrc

# install markdown
apt-get install -y markdown

## install rvm and ruby 1.8.7
curl -sSL https://get.rvm.io | bash -s stable
source /etc/profile.d/rvm.sh
rvm install ruby-1.8.7-p374
rvm use ruby-1.8.7-p374
gem install bundler

# install nokogiri dependencies
apt-get install -y libxslt-dev libxml2-dev

# additonal tools to build new versions
apt-get install -y rake

# setup project
cd /vagrant
bundle install
