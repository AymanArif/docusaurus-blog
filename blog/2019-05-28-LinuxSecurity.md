---
id: Keys_Linux
title: Dealing with Keys in Linux
author: Ayman
author_title: Software Engineer
author_url: https://github.com/aymanapatel
author_image_url: https://avatars.githubusercontent.com/u/13992816?s=460&u=9944febc50832840a7542bfdaffdedbd5eb87848&v=4
tags: [Linux, SSL, Cryptography]
---

|Language|Topic|Description|Links|
|--|--|--|--|
|Linux|SSL, PEM, Linux|Create Keys, Certificates and PEM for Linux|

<!--truncate-->

# Dealing with Keys in Linux


# Steps to add files on Linux



1. Generate Private Key (RSA 2048)


```
sudo openssl genrsa -out test.key 2048

// Result

-----BEGIN RSA PRIVATE KEY-----
...
-----END RSA PRIVATE KEY-----

```

2. Generate CSR (Certificate signing request)

```
sudo openssl req -new -key test.key -out test.csr


// Result

-----BEGIN CERTIFICATE REQUEST-----
...
-----END CERTIFICATE REQUEST-----
```


3. Generate Certificate

```
openssl x509 -req -days 365 -in test.csr -signkey test.key -out test.crt

// Result

-----BEGIN CERTIFICATE-----
...
-----END CERTIFICATE-----
```


4. Concatenate Private Key and Certificate to PEM file. This file is stored in secure `etc/ssl/private/*.pem` directory.

> `/etc/ssl/private` is secure. Only `sudo -i` works in opening the PEM file

```
sudo bash -c 'cat test.key test.crt >> /etc/ssl/private/test.pem' 

// Result

-----BEGIN RSA PRIVATE KEY-----
...
-----END RSA PRIVATE KEY-----
-----BEGIN CERTIFICATE-----
...
-----END CERTIFICATE-----
```
