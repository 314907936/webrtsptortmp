::[Bat To Exe Converter]
::
::YAwzoRdxOk+EWAnk
::fBw5plQjdG8=
::YAwzuBVtJxjWCl3EqQJgSA==
::ZR4luwNxJguZRRnk
::Yhs/ulQjdF+5
::cxAkpRVqdFKZSTk=
::cBs/ulQjdF+5
::ZR41oxFsdFKZSDk=
::eBoioBt6dFKZSDk=
::cRo6pxp7LAbNWATEpCI=
::egkzugNsPRvcWATEpCI=
::dAsiuh18IRvcCxnZtBJQ
::cRYluBh/LU+EWAnk
::YxY4rhs+aU+JeA==
::cxY6rQJ7JhzQF1fEqQJQ
::ZQ05rAF9IBncCkqN+0xwdVs0
::ZQ05rAF9IAHYFVzEqQJQ
::eg0/rx1wNQPfEVWB+kM9LVsJDGQ=
::fBEirQZwNQPfEVWB+kM9LVsJDGQ=
::cRolqwZ3JBvQF1fEqQJQ
::dhA7uBVwLU+EWDk=
::YQ03rBFzNR3SWATElA==
::dhAmsQZ3MwfNWATElA==
::ZQ0/vhVqMQ3MEVWAtB9wSA==
::Zg8zqx1/OA3MEVWAtB9wSA==
::dhA7pRFwIByZRRnk
::Zh4grVQjdCuDJEuQ+VIMPx5WXhCPLGG3AvsZ8O2b
::YB416Ek+ZG8=
::
::
::978f952a14a936cc963da21a135fa983
@echo off
set param=%1%
set param=%param:"=%
set param=%param:WebShellab:=%
set t=%param%
set i=0
:loop
for /f "delims=# tokens=1*" %%a in ("%t%") do (
   set /a i+=1
   set param%i%=%%a
   set t=%%b
)
if defined t goto :loop
set param3="%param3%"
set param4="%param4:$=&%"
title %param1%
if %param5% gtr 0 (
cmd /c taskkill /f /t /fi "windowtitle eq 管理员:  %param1%*"
rem cmd /k tasklist /fi "windowtitle eq 管理员:  %param1%*"
)else d:/rtmp/bin/ffmpeg.exe -i %param3% -vcodec copy -acodec copy -f flv %param4%