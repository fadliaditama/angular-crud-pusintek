import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnggaranService } from '../anggaran.service';
import { ModelAnggaran } from '../model-anggaran';

@Component({
  selector: 'app-add-anggaran',
  templateUrl: './add-anggaran.component.html',
  styleUrls: ['./add-anggaran.component.css']
})
export class AddAnggaranComponent implements OnInit {
  anggaranForm: ModelAnggaran = {
    id: 0,
    nama_anggaran: '',
    penanggung_jawab: '',
    jumlah_anggaran: 0,
  }

  constructor(private anggaranService: AnggaranService, private route: Router) { }

  ngOnInit(): void {
  }

  create() {
    this.anggaranService.create(this.anggaranForm)
      .subscribe({
        next: (data) => {
          this.route.navigate(["/anggaran/beranda"])
        },
        error: (error) => {
          console.log(error);
        }
      })
  }

}
