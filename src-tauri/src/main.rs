// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use std::fs::File;

#[tauri::command]
// fn metadata_extraction(file_path: String) -> std::io::Result<()>  {
//     // Open the file
//     let file = File::open(file_path);

//     // Get metadata
//     let metadata = File::metadata(file);

//     println!("{:?}", metadata?.file_type());


//     Ok(())
// }


fn main() {
    tauri::Builder::default()
        // .invoke_handler(tauri::generate_handler![metadata_extraction])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
