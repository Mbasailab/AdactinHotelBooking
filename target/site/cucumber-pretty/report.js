$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/BookHotel.feature");
formatter.feature({
  "line": 2,
  "name": "Book hotel Feature",
  "description": "",
  "id": "book-hotel-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@run1"
    }
  ]
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Successful booking of a hotel",
  "description": "",
  "id": "book-hotel-feature;successful-booking-of-a-hotel",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "comments": [
    {
      "line": 10,
      "value": "#Then a user login successfully and a search page is opened successfully"
    }
  ],
  "line": 11,
  "name": "a user populates fields in the search page and clicks continue \"\u003clocation\u003e\", \"\u003chotels\u003e\", \"\u003cRoomType\u003e\", \"\u003cNumberOfRooms\u003e\", \"\u003cCheckInDate\u003e\", \"\u003cCheckOutDate\u003e\", \"\u003cAdultsPerRoom\u003e\", \"\u003cChildrenPerRoom\u003e\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 12,
      "value": "#Then a user is navigated to the select page successfully"
    }
  ],
  "line": 13,
  "name": "a user selects a hotel from the selection page and click continue",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 14,
      "value": "#Then a booking confirmation page is opened successfully"
    }
  ],
  "line": 15,
  "name": "a user populates the book with valid data and clicks confirm \"\u003cFirstName\u003e\", \"\u003cLastName\u003e\", \"\u003cBillingAddress\u003e\", \"\u003cCreditCardNumber\u003e\", \"\u003cCreditCardType\u003e\", \"\u003cExpiryDateMonth\u003e\", \"\u003cExpiryDateYear\u003e\", \"\u003cCVV\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "a order is generated and the booking is successful",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "a user clicks logout",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "a user is successfully logged out",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "book-hotel-feature;successful-booking-of-a-hotel;",
  "rows": [
    {
      "cells": [
        "location",
        "hotels",
        "RoomType",
        "NumberOfRooms",
        "CheckInDate",
        "CheckOutDate",
        "AdultsPerRoom",
        "ChildrenPerRoom",
        "FirstName",
        "LastName",
        "BillingAddress",
        "CreditCardNumber",
        "CreditCardType",
        "ExpiryDateMonth",
        "ExpiryDateYear",
        "CVV"
      ],
      "line": 21,
      "id": "book-hotel-feature;successful-booking-of-a-hotel;;1"
    },
    {
      "cells": [
        "London",
        "Hotel Creek",
        "Standard",
        "2 - Two",
        "22/05/2022",
        "23/05/2022",
        "2 - Two",
        "1 - One",
        "test",
        "test",
        "test",
        "4323212345676543",
        "VISA",
        "August",
        "2022",
        "123"
      ],
      "line": 22,
      "id": "book-hotel-feature;successful-booking-of-a-hotel;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "user logs in",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "a user launches \"chrome\" and navigates to the Adactin web page \"http://adactinhotelapp.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "a user enters the \"AutoTestb\" and \"84JLRY\" and clicks login",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 17
    },
    {
      "val": "http://adactinhotelapp.com",
      "offset": 64
    }
  ],
  "location": "MyStepdefs.a_user_launches_and_navigates_to_the_Adactin_web_page(String,String)"
});
formatter.result({
  "duration": 8343092600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AutoTestb",
      "offset": 19
    },
    {
      "val": "84JLRY",
      "offset": 35
    }
  ],
  "location": "MyStepdefs.a_user_enters_the_and_and_clicks_login(String,String)"
});
formatter.result({
  "duration": 4313786000,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Successful booking of a hotel",
  "description": "",
  "id": "book-hotel-feature;successful-booking-of-a-hotel;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@run1"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 10,
      "value": "#Then a user login successfully and a search page is opened successfully"
    }
  ],
  "line": 11,
  "name": "a user populates fields in the search page and clicks continue \"London\", \"Hotel Creek\", \"Standard\", \"2 - Two\", \"22/05/2022\", \"23/05/2022\", \"2 - Two\", \"1 - One\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 12,
      "value": "#Then a user is navigated to the select page successfully"
    }
  ],
  "line": 13,
  "name": "a user selects a hotel from the selection page and click continue",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 14,
      "value": "#Then a booking confirmation page is opened successfully"
    }
  ],
  "line": 15,
  "name": "a user populates the book with valid data and clicks confirm \"test\", \"test\", \"test\", \"4323212345676543\", \"VISA\", \"August\", \"2022\", \"123\"",
  "matchedColumns": [
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "a order is generated and the booking is successful",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "a user clicks logout",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "a user is successfully logged out",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 64
    },
    {
      "val": "Hotel Creek",
      "offset": 74
    },
    {
      "val": "Standard",
      "offset": 89
    },
    {
      "val": "2 - Two",
      "offset": 101
    },
    {
      "val": "22/05/2022",
      "offset": 112
    },
    {
      "val": "23/05/2022",
      "offset": 126
    },
    {
      "val": "2 - Two",
      "offset": 140
    },
    {
      "val": "1 - One",
      "offset": 151
    }
  ],
  "location": "MyStepdefs.a_user_populates_fields_in_the_search_page_and_clicks_continue(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 1539171700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.a_user_selects_a_hotel_from_the_selection_page_and_click_continue()"
});
formatter.result({
  "duration": 1040980400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 62
    },
    {
      "val": "test",
      "offset": 70
    },
    {
      "val": "test",
      "offset": 78
    },
    {
      "val": "4323212345676543",
      "offset": 86
    },
    {
      "val": "VISA",
      "offset": 106
    },
    {
      "val": "August",
      "offset": 114
    },
    {
      "val": "2022",
      "offset": 124
    },
    {
      "val": "123",
      "offset": 132
    }
  ],
  "location": "MyStepdefs.a_user_populates_the_book_with_valid_data_and_clicks_confirm(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 6193515800,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.a_order_is_generated_and_the_booking_is_successful()"
});
formatter.result({
  "duration": 18366600,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.a_user_clicks_logout()"
});
formatter.result({
  "duration": 1046167000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.a_user_is_successfully_logged_out()"
});
formatter.result({
  "duration": 3192300,
  "status": "passed"
});
});