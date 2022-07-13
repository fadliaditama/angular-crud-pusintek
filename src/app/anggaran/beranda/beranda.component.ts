import { Component, OnInit } from '@angular/core';
import { AnggaranService } from '../anggaran.service';
import { ModelAnggaran } from '../model-anggaran';

@Component({
  selector: 'app-beranda',
  templateUrl: './beranda.component.html',
  styleUrls: ['./beranda.component.css']
})
export class BerandaComponent implements OnInit {
  allModelAnggaran: ModelAnggaran[] = [];

  constructor(private anggaranService: AnggaranService) { }

  ngOnInit(): void {
    this.get();
  }

  get() {
    this.anggaranService.get()
      .subscribe((data) => {
        this.allModelAnggaran = data;
      })
  }


}
