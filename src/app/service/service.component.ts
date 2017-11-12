import { Component } from '@angular/core';
import { LogService } from './log.service';

@Component({
  selector: 'asd-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {

  constructor(private _logger: LogService) { }

  onAction(){
    this._logger.log('write log');
  }
}

