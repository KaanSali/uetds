import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/services/helper.service';
import { MenuList } from '../menu-list';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  constructor(public helper:HelperService, public menulist:MenuList) { }

  ngOnInit() {}

}
