import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  objectV = new Array();

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.objectV = [
      { id: 0, image: 'wite.png', selection: false, user: 0 },
      { id: 1, image: 'wite.png', selection: false, user: 0 },
      { id: 2, image: 'wite.png', selection: false, user: 0 },
      { id: 3, image: 'wite.png', selection: false, user: 0 },
      { id: 4, image: 'wite.png', selection: false, user: 0 },
      { id: 5, image: 'wite.png', selection: false, user: 0 },
      { id: 6, image: 'wite.png', selection: false, user: 0 },
      { id: 7, image: 'wite.png', selection: false, user: 0 },
      { id: 8, image: 'wite.png', selection: false, user: 0 },
    ];
  }

  clickItem(id: number) {
    const obj = this.objectV.find((object) => object.id === id);

    if (obj.selection === false) {
      obj.image = 'circulo.jpg';
      obj.selection = true;
      obj.user = 1;
      this.objectV.push(obj);
      this.checkWinner(1);
      if (this.checkWinner(1) === false) {
        this.setMachine();
        this.checkWinner(2);
      }
    }
    // console.log('143');
  }

  getImg(id: number): string {
    const imagen = this.objectV.find((object) => object.id === id);

    return imagen.image;
  }

  getState(id: number): boolean {
    const imagen = this.objectV.find((object) => object.id === id);
    return imagen.selection;
  }

  setMachine() {
    for (const it of this.objectV) {
      if (it.selection === false) {
        const machine = it;
        machine.image = 'xicon-2.jpg';
        machine.selection = true;
        machine.user = 2;
        this.objectV.push(machine);
        break;
      }
    }
  }
  checkWinner(id: number): boolean {
    if (
      this.objectV[0].user === id &&
      this.objectV[1].user === id &&
      this.objectV[2].user === id
    ) {
      this.navigatePage(id);
      return true;
    }

    if (
      this.objectV[3].user === id &&
      this.objectV[4].user === id &&
      this.objectV[5].user === id
    ) {
      this.navigatePage(id);
      return true;
    }

    if (
      this.objectV[6].user === id &&
      this.objectV[7].user === id &&
      this.objectV[8].user === id
    ) {
      this.navigatePage(id);
      return true;
    }
    if (
      this.objectV[0].user === id &&
      this.objectV[3].user === id &&
      this.objectV[6].user === id
    ) {
      this.navigatePage(id);
      return true;
    }

    if (
      this.objectV[1].user === id &&
      this.objectV[4].user === id &&
      this.objectV[7].user === id
    ) {
      this.navigatePage(id);
      return true;
    }
    if (
      this.objectV[2].user === id &&
      this.objectV[5].user === id &&
      this.objectV[8].user === id
    ) {
      this.navigatePage(id);
      return true;
    }

    if (
      this.objectV[0].user === id &&
      this.objectV[4].user === id &&
      this.objectV[8].user === id
    ) {
      this.navigatePage(id);
      return true;
    }

    if (
      this.objectV[2].user === id &&
      this.objectV[4].user === id &&
      this.objectV[6].user === id
    ) {
      this.navigatePage(id);
      return true;
    }
    this.checkTie();
    return false;
  }

  checkTie(): void {
    let state = true;
    for (const it of this.objectV) {
      if (it.selection === false) {
        state = false;
        break;
      }
    }
    if (state === true) {
      this.navigatePage(0);
    }
  }

  navigatePage(id: number): void {
    if (id === 1) {
      this.router.navigate(['winner']);
    } else if (id === 2) {
      this.router.navigate(['loser']);
    } else {
      this.router.navigate(['tie']);
    }
  }
}
