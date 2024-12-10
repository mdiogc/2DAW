## Nginx
1. Crear directorios para las empresas

```bash
mkdir -p /var/www/empresa1
```

```bash
mkdir -p /var/www/empresa2

```

```bash
mkdir -p /var/www/empresa3
```
2. Cambiar la propiedad de los directorios

```bash
chown -R www-data: /var/www/empresa1
```

```bash
chown -R www-data: /var/www/empresa2
```

```bash
chown -R www-data: /var/www/empresa3
```
3. Cambiar los permisos de los directorios


```bash
chmod -R 755 /var/www/empresa1
```
```bash
chmod -R 755 /var/www/empresa2
```
```bash
chmod -R 755 /var/www/empresa3
```
4. Navegar a la configuración de Nginx

```bash
cd /etc/nginx
```

```bash
cd sites-available
```
5. Copiar el archivo de configuración por defecto para cada empresa

```bash
cp default empresa1
```
```bash
cp default empresa2
```
```bash
cp default empresa3
```
6. Editar el archivo de configuración de cada empresa

```bash
sudo nano empresa1
```

En el nano ponemos:
- Al lado de listen:80, quitamos default_server
- Al lado de listen [::], quitamos el default_server
- En donde pone root /var /www/html, quitamos el html y ponemos empresa1
- En donde poner server_name, quitamos la barra baja del final y ponemos empresa1.com www.empresa1.com
- HAcer los mismo con los ficheros empresa2 y emoresa3.
- Guardamos y cerramos el nano.

7. Crear enlaces simbólicos en sites-enabled

```bash
cd ..
ls -l
sudo ln -s /etc/nginx/sites-available/empresa1 /etc/nginx/sites-enabled/

```
8. Eliminar el archivo de configuración por defecto

```bash
rm default
```
9. Probar la configuración de Nginx

```bash
nginx -t
```
10. Recargar Nginx para aplicar los cambios

```bash
nginx -s reload
```
11. Editar el archivo /etc/hosts (opcional)

```bash
nano /etc/hosts
```
12. Recargar Nginx nuevamente

```bash
nginx -s reload
```
13. Crear archivos index.html para cada empresa

```bash
cd /var/www/empresa1
cd /var/www/empresa2
cd /var/www/empresa3
```
```bash
ls -l
nano index.html
```
14. Recargar Nginx una vez más

```bash
nginx -s reload
```