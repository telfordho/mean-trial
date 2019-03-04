import { Component, OnInit } from '@angular/core';
import { NotesService } from '../notes.service'
import { Note, Profile } from '../interfaces'

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})

export class NotesComponent implements OnInit {

  public profile
  titleModel: String;
  descriptionModel: String;
  statusModel: String;
  notes: Note[];

  constructor(private notesService: NotesService) {
    this.titleModel = '';
    this.descriptionModel = '';
    this.statusModel = 'completed';
    this.notes = []
  }
  ngOnInit() {
    this.notesService.getProfile()
      .subscribe(data => {
        this.notes = data.notes
      })
  }

  setStatus(value) {
    this.statusModel = value
  }

  createNote() {
    const newNotes: Note = {
      title: this.titleModel,
      description: this.descriptionModel,
      status: this.statusModel
    };
    this.notes.push(newNotes);
    this.titleModel = this.descriptionModel = ''
    this.statusModel = 'completed';
  }

}
