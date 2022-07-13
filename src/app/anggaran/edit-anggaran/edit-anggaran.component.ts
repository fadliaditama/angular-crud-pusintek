import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnggaranService } from '../anggaran.service';
import { ModelAnggaran } from '../model-anggaran';

@Component({
  selector: 'app-edit-anggaran',
  templateUrl: './edit-anggaran.component.html',
  styleUrls: ['./edit-anggaran.component.css']
})
export class EditAnggaranComponent implements OnInit {
  anggaranForm: ModelAnggaran = {
    id: 0,
    nama_anggaran: '',
    penanggung_jawab: '',
    jumlah_anggaran: 0,
  }

  constructor(private anggaranService: AnggaranService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'))
      this.getById(id)
    })
  }

  getById(id: number) {
    this.anggaranService.getById(id)
      .subscribe((data) => {
        this.anggaranForm = data
      })
  }

  update() {
    this.anggaranService.update(this.anggaranForm)
      .subscribe({
        next: (data) => {
          this.router.navigate(["/anggaran/beranda"])
        },
        error: (error) => {
          console.log(error)
        }
      })
  }
}
