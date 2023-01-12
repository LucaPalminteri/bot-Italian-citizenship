# About
A simple repo that book turns in the oficial page of italian citizenship.

## Routes

### Home

| Type                      | Service                   | Description                                                                               | Book                                               |
|---------------------------|---------------------------|-------------------------------------------------------------------------------------------|----------------------------------------------------|
| IDENTITY/TRAVEL DOCUMENTS | Passport                  | Passports                                                                                 | https://prenotami.esteri.it/ Services/Booking/554  |
| CITIZENSHIP               | Citizenship by descent    | Adult children of citizens already registered in AIRE                                     | https://prenotami.esteri.it/ Services/Booking/699  |
| LEGALISATIONS             | Legalisation of documents | Legalización de documentación para trámites de ciudadanía italiana a presentar en Italia  | https://prenotami.esteri.it/ Services/Booking/901  |
| CITIZENSHIP               | Citizenship by descent    | Ricostruzione di cittadinanza                                                             | Booking calendar not yet available                 |
| TAX CODE                  | Allocation of tax code    | Richiesta di codice fiscale                                                               | https://prenotami.esteri.it/ Services/Booking/1028 |
| CONSULAR SERVICES         | Consular services         | Assenso all'emissione del passaporto                                                      | https://prenotami.esteri.it/ Services/Booking/1129 |
| AIRE AND CIVIL STATUS     | Registry office           | Convivenze di fatto                                                                       | https://prenotami.esteri.it/ Services/Booking/1130 |
| LEGALISATIONS             | Legalisation of documents | Dichiarazione di valore                                                                   | https://prenotami.esteri.it/ Services/Booking/2424 |

### Citizenships 
https://prenotami.esteri.it/BookingCalendar?selectedService=Figli%20maggiorenni%20di%20cittadini%20gi%C3%A0%20iscritti%20all%27AIRE

![image](/Italian-citizenship.png)


div#id => datetimepicker
    |-> div.bootstrap-datetimepicker-widget usetwentyfour
        |-> ul.list-unstyled
            |-> ul
                |-> div.datepicker
                    |-> div.datepicker-days
                        |-> table.table-condensed
                            |-> tbody
                                |->  tr * 6
                                    |-> td data-action="selectDay" data-day="dd/MM/yyyy" class="day old/weekend disabled/enabled"