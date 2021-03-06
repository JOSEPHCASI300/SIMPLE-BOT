const routersploit = (prefix, pushname) => {
    return `馃摫驴Que es RouterSploit?馃摫

RouterSploit, es un framework de seguridad open source muy similar al conocido Metasploit con el cual podremos auditar nuestros dispositivos (routers, webcam, NAS, etc) para comprobar si tienen vulnerabilidades conocidas.

馃摫 El framework, cuenta con los siguientes 5 m贸dulos:馃摫

馃寧 Exploits: m贸dulos que aprovechan las vulnerabilidades identificadas. 馃寧

馃寪 Creds: m贸dulos para probar credenciales en los servicios de red. 馃寪

馃敀 Scanners: m贸dulos que verifican si un objetivo es vulnerable a cualquier exploit. 馃敀

馃拤 Payloads: m贸dulos para generar cargas 煤tiles en diversas arquitecturas. 馃拤

馃懢 Generic: m贸dulos que realizan ataques gen茅ricos. 馃懢

馃摫Instalaci贸n:馃摫

$ apt update && apt upgrade -y
$ termux-setup-storage
$ pkg install python git clang -y
$ pkg install -y make
$ git clone https://github.com/threat9/routersploit
$ cd routersploit
$ python3 -m pip install -r requirements.txt
$ python3 -m pip install -r requirements-dev.txt
$ chmod +x *setup.py
$ python3 setup.py install
$ python3 rsf.py

Uso:

show all

use scanners/autopwn

show options

set target 192.168.1.1`

}

exports.routersploit = routersploit
