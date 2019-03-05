import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service'
import { Note, Profile } from '../interfaces'

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})

export class NotesComponent implements OnInit {

  public profile: Profile;
  public token: string;
  public id: string;
  private titleModel: String;
  private descriptionModel: String;
  private statusModel: String;
  private notes: Note[];

  constructor(private appService: AppService) {
    this.token = localStorage.getItem('mean-token');
    this.id = this.appService.getIdFromToken(this.token)
    this.titleModel = '';
    this.descriptionModel = '';
    this.statusModel = 'completed';
    this.notes = []
  }
  ngOnInit() {
    this.appService.getProfile(this.id)
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
    this.appService.updateNote(this.id, this.notes).subscribe()
    this.titleModel = this.descriptionModel = ''
    this.statusModel = 'completed';
  }
}
