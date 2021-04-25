import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FileSystemDirectoryEntry, FileSystemFileEntry, NgxFileDropEntry } from 'ngx-file-drop';
import { Character } from 'src/app/beans/character';

@Component({
  selector: 'casl-character-select',
  templateUrl: './character-select.component.html',
  styleUrls: ['./character-select.component.scss']
})
export class CharacterSelectComponent implements OnInit {

  character: Character;

  file: NgxFileDropEntry;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  newCharacter(): void {
    this.router.navigateByUrl('/character/create');
  }

  dropped(droppedFile: NgxFileDropEntry): void {
    const newFile = droppedFile[0];
    this.file = newFile;

    // Is it a file?
    if (newFile.fileEntry.isFile) {
      const fileEntry = newFile.fileEntry as FileSystemFileEntry;
      fileEntry.file((file: File) => {

        // Here you can access the real file
          console.log(newFile.relativePath, file);

        /**
         * You could upload it like this: *
         * const formData = new FormData()
         * formData.append('logo', file, relativePath)
         *
         * Headers *
         * const headers = new HttpHeaders({
         * 'security-token': 'mytoken'
         * })
         *
         * this.http.post('https://mybackend.com/api/upload/sanitize-and-save-logo', formData, { headers: headers, responseType: 'blob' })
         * .subscribe(data => {
         * Sanitized logo returned from backend
         * })
         */

      });
    } else {
      // It was a directory (empty directories are added, otherwise only files)
      const fileEntry = newFile.fileEntry as FileSystemDirectoryEntry;
      console.log(newFile.relativePath, fileEntry);
    }
  }

  fileOver(event): void {
    console.log(event);
  }

  fileLeave(event): void {
    console.log(event);
  }

}
