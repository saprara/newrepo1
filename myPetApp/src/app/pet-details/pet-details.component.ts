import {Component} from "@angular/core";
import {Pet} from "../pet";
import {PetDataService} from "../pet-data.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-pet-details',
  templateUrl: 'pet-details.component.html',


  styleUrls: ['./pet-details.component.css']
})
export class PetDetailsComponent {
  pet: Pet | undefined;

  constructor(petDataService: PetDataService, activatedRoute: ActivatedRoute) {
    const idParam = activatedRoute.snapshot.paramMap.get('id');
    const id: number | null = idParam !== null ? +idParam : null;
    if (!isNaN(id!)) {
      this.pet = petDataService.getPet(id!);
    }
  }

}


