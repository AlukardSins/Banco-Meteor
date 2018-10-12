# Banco-Meteor

## Para instalar Meteor:
> En linux
>>+ `curl https://install.meteor.com/ | sh`

> En Windows
>> Necesitamos Chocolatey
>>>+ CMD: `@"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"`
>>>+ PowerShell: `Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))`
>> Una vez obtenido Chocolatey `choco install meteor`

## Los comandos para Clonar y ejecutar son:
>+ `bash$ git clone https://github.com/AlukardSins/Banco-Meteor/`
>+ `bash$ cd Banco-Meteor`
>+ `bash$ npm install`
>+ `bash$ meteor update`
>+ `bash$ meteor`
>+ Una vez realizado pasar a rama `dev`
>> `git checkout dev`