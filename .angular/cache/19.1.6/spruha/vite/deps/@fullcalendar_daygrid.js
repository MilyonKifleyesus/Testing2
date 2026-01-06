import {
  DayTableView,
  TableDateProfileGenerator
} from "./chunk-CNORBJYU.js";
import {
  createPlugin
} from "./chunk-M5S7KU62.js";
import "./chunk-AJH3MT3R.js";

// node_modules/@fullcalendar/daygrid/index.js
var index = createPlugin({
  name: "@fullcalendar/daygrid",
  initialView: "dayGridMonth",
  views: {
    dayGrid: {
      component: DayTableView,
      dateProfileGeneratorClass: TableDateProfileGenerator
    },
    dayGridDay: {
      type: "dayGrid",
      duration: {
        days: 1
      }
    },
    dayGridWeek: {
      type: "dayGrid",
      duration: {
        weeks: 1
      }
    },
    dayGridMonth: {
      type: "dayGrid",
      duration: {
        months: 1
      },
      fixedWeekCount: true
    },
    dayGridYear: {
      type: "dayGrid",
      duration: {
        years: 1
      }
    }
  }
});
export {
  index as default
};
//# sourceMappingURL=@fullcalendar_daygrid.js.map
