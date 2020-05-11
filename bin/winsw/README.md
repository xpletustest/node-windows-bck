# WINSW

## How it works
This project uses WinSW to create services.  
It simply generates an XML file with all service parameters and a renamed copy of winsw.exe.  
The .xml & .exe files are should always stay together in the same folder.  
Those files are copied to the daemon folder created by node-windows.  

More details here: https://github.com/winsw/winsw/blob/master/doc/installation.md

## Documentation
Detailed documentation for WinSW can be found here:

https://github.com/winsw/winsw

## Releases
The latest releases of WinSW can be found here: https://github.com/winsw/winsw/releases

For our purposes we now use the NET461 version of WinSW v2.9.0.

## Installed .NET versions
You can run `./bin/DotNetVersions/DotNetVersions.exe` to list the .NET versions installed on your machine.

## OS compatibility
.NET 4.6.1 (or later) is compatible with the following OS versions:

Windows versions  
✔️ 10 November Update (Version 1511)  
➕ 10  
➕ 8.1  
➕ 8  
➕ 7  
Windows Server versions  
➕ 2012 R2  
➕ 2012  
➕ 2008 R 2 SP1  

(see https://docs.microsoft.com/en-us/dotnet/framework/migration-guide/versions-and-dependencies#net-framework-461) 

## .exe.config Configuration file
In `winsw.exe.config` we specify   
`<supportedRuntime version="v4.0" sku=".NETFramework,Version=v4.6.1"/>` 

Indicating that we need `CLR 4.0` and target `.NET v4.6.1`. Newer versions are also supported.  
(see https://docs.microsoft.com/en-us/dotnet/framework/configure-apps/file-schema/startup/supportedruntime-element#version)
