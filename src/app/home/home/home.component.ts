import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dpmForm!: FormGroup
  bdata: any [] = []

  constructor(
    private fb: FormBuilder,
    private sv: AppService
  ){
    this.dpmForm = this.fb.group({
      id: [null],
      code: [null],
      name: [null],
      updatedate: [null],
      updateuser: [null],
      createdate: [null],
      createuser: [null],
    });
  }

  ngOnInit(): void {
    this.sv.getData().subscribe((res:any) => {
      res.forEach((element:any)=>{
        let data = this.dpmForm.getRawValue()
        data.id = element.id
        data.code = element.code
        data.name = element.name
        data.updatedate = element.updatedate
        data.updateuser = element.updateuser
        data.createdate = element.createdate
        data.createuser = element.createuser
        this.bdata.push(data)
      })

    });
  }
}
