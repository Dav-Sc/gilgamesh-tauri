// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use std::io;
use std::fs::{self, DirEntry};
use std::path::Path;
use std::env;

#[tauri::command(rename_all = "snake_case")]
fn my_custom_command(invoke_message: String) {
  println!("I was invoked from JS, with this message: {}", invoke_message);
}

#[tauri::command]
fn applicaitoninit_command(){
    check_tauiobooks_command();
}


fn check_tauiobooks_command() {
    // Check if the OS is Windows
    if cfg!(windows) {
        // Get the current user's username
        let username = env::var("USERNAME").expect("Failed to get USERNAME environment variable");
        
        // Construct the path to the TAudiobooks folder
        let path = format!("C:\\Users\\{}\\Music\\TAudiobooks", username);
        let path = Path::new(&path);

        // Check if TAudiobooks folder exists
        if path.exists() {
            // List files in TAudiobooks folder
            match fs::read_dir(path) {
                Ok(entries) => {
                    for entry in entries {
                        let entry = entry.unwrap();
                        let path = entry.path();
                        if path.is_file() {
                            println!("{:?}", path.file_name().unwrap());
                        }
                    }
                }
                Err(e) => println!("Failed to read directory: {}", e),
            }
        } else {
            // Create TAudiobooks folder
            match fs::create_dir(path) {
                Ok(_) => println!("TAudiobooks folder created successfully."),
                Err(e) => println!("Failed to create TAudiobooks folder: {}", e),
            }
        }
    } else {
        println!("This program is intended to run on Windows only.");
    }
}



// Also in main.rs
fn main() {
    tauri::Builder::default()
      // This is where you pass in your commands
      .invoke_handler(tauri::generate_handler![my_custom_command])
      .invoke_handler(tauri::generate_handler![applicaitoninit_command])

      .run(tauri::generate_context!())
      .expect("failed to run app");
  }