FROM php:5.6-apache

# Enable apache rewrite module
RUN ln -s /etc/apache2/mods-available/rewrite.load /etc/apache2/mods-enabled/

# Install Composer
RUN mkdir -p /usr/local/bin && php -r "readfile('https://getcomposer.org/installer');" | php \
    && mv composer.phar /usr/local/bin/composer

    # Install utils
RUN apt-get update && apt-get install -y unzip curl git

# Install Node.js
RUN curl -sL https://deb.nodesource.com/setup_4.x | bash - && \
  apt-get install -y nodejs

RUN npm install bower -g

# Copy PHP configuration file
COPY build/php.ini /usr/local/etc/php/

RUN git clone git://github.com/gaspaio/gearmanui.git /gearmanui

RUN rm -rf /var/www/html

RUN ln -s /gearmanui /var/www/html

WORKDIR /gearmanui

RUN composer install --no-dev

RUN bower install --allow-root

COPY ./conf/config.yml /gearmanui/config.yml


