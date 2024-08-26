Bu proje, Keycloak ile basit bir kimlik doğrulama ve yetkilendirme entegrasyonunu gösteren bir Node.js ve Express uygulamasıdır. Proje, Docker kullanarak Keycloak'ı kurar ve Node.js uygulamanızla nasıl entegre edileceğini adım adım gösterir.

Özellikler:

Keycloak ile kimlik doğrulama
Korunan route'lara erişim kontrolü
Basit bir Express uygulaması
Docker ile Keycloak kurulum örneği


Kurulum:

Keycloak'ı Docker ile Kurma:
docker run -p 8080:8080 -e KEYCLOAK_ADMIN=admin -e KEYCLOAK_ADMIN_PASSWORD=admin quay.io/keycloak/keycloak:latest start-dev

Node.js Uygulamasını Çalıştırma:
npm install
node index.js

Test:

Web tarayıcınızı açın ve http://localhost:3000 adresine gidin.
/protected route'una gidin ve Keycloak oturum açma sayfasına yönlendirileceksiniz.
Keycloak üzerinde oluşturduğunuz kullanıcı ile giriş yapın ve korunan sayfaya erişin.

Notlar:

Keycloak yönetim paneline http://localhost:8080 adresinden erişebilirsiniz.
Giriş yapmak için admin kullanıcı adı ve şifresini kullanabilirsiniz.
