@echo off
title SkyMind Team Showcase — Local Dev Server
echo =======================================================
echo  SkyMind Team Showcase - Dev Server
echo =======================================================
echo.
echo Starting the Vite development server...
echo.

:: Change directory to the folder containing this batch file
cd /d "%~dp0"

:: Start the Vite server using Node.js directly to avoid path issues
node "%~dp0node_modules\vite\bin\vite.js"

if %errorlevel% neq 0 (
    echo.
    echo [ERROR] The development server failed to start.
    echo Please make sure Node.js is installed and "npm install" was completed successfully.
    echo.
    pause
)
