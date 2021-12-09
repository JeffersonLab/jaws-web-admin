import remote from './remote.js';
import db from './db.js';
import TableUI from './table-ui.js';
import page from './page-1.11.6.js';

const meta = document.querySelector('meta');
const contextPath = meta && meta.dataset.contextPath || '';

class UserInterface {
    constructor() {
        this.tabs = {
            init: function() {
                page('/classes');
            },
            class: async function(ctx, next) {
                $("#tabs").tabs({ active: 0 });

                let data = await db.classes.get(ctx.params.name);

                $("#view-class-name").text(data.name);
                $("#view-class-priority").text(data.priority);
                $("#view-class-location").text(data.location);
                $("#view-class-category").text(data.category);
                $("#view-class-rationale").text(data.rationale);
                $("#view-class-action").text(data.correctiveaction);
                $("#view-class-contact").text(data.pointofcontactusername);
                $("#view-class-filterable").text([data.filterable]);
                $("#view-class-latching").text([data.latching]);
                $("#view-class-on-delay").text(data.ondelayseconds);
                $("#view-class-off-delay").text(data.offdelayseconds);
                $("#view-class-masked-by").text(data.maskedby);
                $("#view-class-screen-path").text(data.screenpath);

                $("#view-class-dialog").dialog("open");
            },
            registration: async function(ctx, next) {
                $("#tabs").tabs({ active: 1 });

                let data = await db.registrations.get(ctx.params.name);

                $("#view-registration-name").text(data.name);
                $("#view-registration-class").text(data.class);
                $("#view-registration-epicspv").text(data.epicspv);
                $("#view-registration-priority").text(data.priority);
                $("#view-registration-location").text(data.location);
                $("#view-registration-category").text(data.category);
                $("#view-registration-rationale").text(data.rationale);
                $("#view-registration-action").text(data.correctiveaction);
                $("#view-registration-contact").text(data.pointofcontactusername);
                $("#view-registration-filterable").text([data.filterable]);
                $("#view-registration-latching").text([data.latching]);
                $("#view-registration-on-delay").text(data.ondelayseconds);
                $("#view-registration-off-delay").text(data.offdelayseconds);
                $("#view-registration-masked-by").text(data.maskedby);
                $("#view-registration-screen-path").text(data.screenpath);

                $("#view-registration-dialog").dialog("open");
            },
            effect: async function(ctx, next) {
                $("#tabs").tabs({ active: 2 });

                let data = await db.effective.get(ctx.params.name);

                $("#view-effective-name").text(data.name);
                $("#view-effective-class").text(data.class);
                $("#view-effective-epicspv").text(data.epicspv);
                $("#view-effective-priority").text(data.priority);
                $("#view-effective-location").text(data.location);
                $("#view-effective-category").text(data.category);
                $("#view-effective-rationale").text(data.rationale);
                $("#view-effective-action").text(data.correctiveaction);
                $("#view-effective-contact").text(data.pointofcontactusername);
                $("#view-effective-filterable").text([data.filterable]);
                $("#view-effective-latching").text([data.latching]);
                $("#view-effective-on-delay").text(data.ondelayseconds);
                $("#view-effective-off-delay").text(data.offdelayseconds);
                $("#view-effective-masked-by").text(data.maskedby);
                $("#view-effective-screen-path").text(data.screenpath);

                $("#view-effective-dialog").dialog("open");
            },
            classes: function() {
                $("#tabs").tabs({ active: 0 });
            },
            registrations: function() {
                $("#tabs").tabs({ active: 1 });
            },
            effective: function() {
                $("#tabs").tabs({ active: 2 });
            }
        };

        page.base(contextPath + '/view');

        page('/', this.tabs.init);
        page('/classes', this.tabs.classes);
        page('/registrations', this.tabs.registrations);
        page('/effective', this.tabs.effective);
        page('/classes/:name', this.tabs.class);
        page('/registrations/:name', this.tabs.registration);
        page('/effective/:name', this.tabs.effect);
        page();

        let panelElement = "#classes-panel",
            tableElement = "#classes-table",
            options = {
                data: [],
                headerSort: false,
                reactiveData: false,
                height: "100%", // enables the Virtual DOM
                layout: "fitColumns",
                responsiveLayout: "collapse",
                index: "name",
                selectable: 1,
                initialSort: [
                    {column: "name", dir: "asc"}
                ],
                columns: [
                    {title: "name", field: "name"},
                    {title: "priority", field: "priority"},
                    {title: "location", field: "location"},
                    {title: "category", field: "category"},
                    {title: "contact", field: "pointofcontactusername"}
                ]
            };

       this.classes = new TableUI(panelElement, tableElement, options);

        panelElement = "#registrations-panel",
            tableElement = "#registrations-table",
            options = {
            data: [],
            headerSort: false,
            reactiveData: false,
            height: "100%", // enables the Virtual DOM
            layout: "fitColumns",
            responsiveLayout: "collapse",
            index: "name",
            selectable: 1,
            initialSort: [
                {column: "name", dir: "asc"}
            ],
            columns: [
                {title: "name", field: "name"},
                {title: "class", field: "class"},
                {title: "priority", field: "priority"},
                {title: "location", field: "location"},
                {title: "category", field: "category"},
                {title: "contact", field: "pointofcontactusername"}
            ]
        };

        this.registrations = new TableUI(panelElement, tableElement, options);

        panelElement = "#effective-panel",
            tableElement = "#effective-table",
            options = {
                data: [],
                headerSort: false,
                reactiveData: false,
                height: "100%", // enables the Virtual DOM
                layout: "fitColumns",
                responsiveLayout: "collapse",
                index: "name",
                selectable: 1,
                initialSort: [
                    {column: "name", dir: "asc"}
                ],
                columns: [
                    {title: "name", field: "name"},
                    {title: "class", field: "class"},
                    {title: "priority", field: "priority"},
                    {title: "location", field: "location"},
                    {title: "category", field: "category"},
                    {title: "contact", field: "pointofcontactusername"}
                ]
            };

        this.effective = new TableUI(panelElement, tableElement, options);

        // bind this on properties
        const props = Object.getOwnPropertyNames(Object.getPrototypeOf(this));

        props
            .filter(prop => (prop !== 'constructor'))
            .forEach((prop) => { this[prop] = this[prop].bind(this);});
    }

    search(filterText, uitab, dbtab) {
        let filterArray = filterText.split(",");

        uitab.filters = [];

        for (let filter of filterArray) {
            if(filter.indexOf('=') > -1) { // exact match equals search
                let keyValue = filter.split("=");
                uitab.filters.push(record => record[keyValue[0]] === keyValue[1]);
            } else if(filter.indexOf('~') > -1) { // case-insensitive contains search
                let keyValue = filter.split("~");
                uitab.filters.push(record => {
                    let haystack = record[keyValue[0]] || "";
                    let needle = keyValue[1] || "";
                    return haystack.toLowerCase().includes(needle.toLowerCase());
                });
            }
        }

        uitab.refresh(dbtab);
    }

    classSearch() {
        let filterText = $("#class-search-input").val();

        ui.search(filterText, ui.classes, db.classes);
    }

    registrationSearch() {
        let filterText = $("#registration-search-input").val();

        ui.search(filterText, ui.registrations, db.registrations);
    }

    effectiveSearch() {
        let filterText = $("#effective-search-input").val();

        ui.search(filterText, ui.effective, db.effective);
    }

    setRegistration() {
        let form = document.getElementById("registered-form"),
            formData = new FormData(form);

        let promise = remote.setRegistration(formData);

        promise.then(response => {
            if (response.ok) {
                ui.registeredRowDeselected();
                $("#registration-dialog").dialog("close");
            } else {
                response.json().then(function (data) {
                    if ('parameterViolations' in data && data.parameterViolations.length > 0) {
                        let violations = [];
                        for (let v of data.parameterViolations) {
                            violations.push(v.message);
                        }
                        alert("Unable to edit: " + violations);
                    } else {
                        alert("Network response not ok: " + data);
                    }
                });
            }
        })
            .catch(error => {
                alert("Unable to edit: " + error);
            });
    }

    setClass() {
        let form = document.getElementById("class-form"),
            formData = new FormData(form);

        let promise = remote.setClass(formData);

        promise.then(response => {
            if (response.ok) {
                ui.classes.rowDeselected();
                $("#class-dialog").dialog("close");
            } else {
                response.json().then(function (data) {
                    if ('parameterViolations' in data && data.parameterViolations.length > 0) {
                        let violations = [];
                        for (let v of data.parameterViolations) {
                            violations.push(v.message);
                        }
                        alert("Unable to edit: " + violations);
                    } else {
                        alert("Network response not ok: " + data);
                    }
                });
            }
        })
            .catch(error => {
                alert("Unable to edit: " + error);
            });
    }

    registeredRowSelected(row) {
        $("#registered-toolbar .no-selection-row-action").button("option", "disabled", true);
        $("#registered-toolbar .selected-row-action").button("option", "disabled", false);
    }

    registeredRowDeselected(row) {
        $("#registered-toolbar .no-selection-row-action").button("option", "disabled", false);
        $("#registered-toolbar .selected-row-action").button("option", "disabled", true);
    }

    initPriorities() {
        let prioritySelect = document.getElementById('priority-select');
        remote.getPriorities()
            .then(
                function (response) {
                    if (response.status !== 200) {
                        console.warn('Error. Status Code: ' +
                            response.status);
                        return;
                    }

                    response.json().then(function (data) {
                        let option;

                        for (let i = 0; i < data.length; i++) {
                            option = document.createElement('option');
                            option.text = data[i];
                            prioritySelect.add(option);
                        }

                        let other = prioritySelect.cloneNode(true);
                        other.id = 'registered-priority-select';

                        let emptyOption = document.createElement('option');
                        emptyOption.selected = "selected";
                        other.insertBefore(emptyOption, other.options[0]);

                        document.getElementById("registered-priority-select-span").appendChild(other);
                    });
                }
            )
            .catch(function (err) {
                console.error('Fetch Error -', err);
            });
    }

    initLocations() {
        let locationSelect = document.getElementById('location-select');
        remote.getLocations()
            .then(
                function (response) {
                    if (response.status !== 200) {
                        console.warn('Error. Status Code: ' +
                            response.status);
                        return;
                    }

                    response.json().then(function (data) {
                        let option;

                        for (let i = 0; i < data.length; i++) {
                            option = document.createElement('option');
                            option.text = data[i];
                            locationSelect.add(option);
                        }

                        let other = locationSelect.cloneNode(true);
                        other.id = 'registered-location-select';

                        let emptyOption = document.createElement('option');
                        emptyOption.selected = "selected";
                        other.insertBefore(emptyOption, other.options[0]);

                        document.getElementById("registered-location-select-span").appendChild(other);
                    });
                }
            )
            .catch(function (err) {
                console.error('Fetch Error -', err);
            });
    }

    initCategories() {
        let categorySelect = document.getElementById('category-select');
        remote.getCategories()
            .then(
                function (response) {
                    if (response.status !== 200) {
                        console.warn('Error. Status Code: ' +
                            response.status);
                        return;
                    }

                    response.json().then(function (data) {
                        let option;

                        for (let i = 0; i < data.length; i++) {
                            option = document.createElement('option');
                            option.text = data[i];
                            categorySelect.add(option);
                        }

                        let other = categorySelect.cloneNode(true);
                        other.id = 'registered-category-select';

                        let emptyOption = document.createElement('option');
                        emptyOption.selected = "selected";
                        other.insertBefore(emptyOption, other.options[0]);

                        document.getElementById("registered-category-select-span").appendChild(other);
                    });
                }
            )
            .catch(function (err) {
                console.error('Fetch Error -', err);
            });
    }

    start() {

        $(function () {
            $(".toolbar button").button();

            $("#tabs").tabs({
                activate: function (event, i) {
                    i.newPanel.css("display", "flex");

                    switch (i.newTab.context.innerText) {
                        case 'Classes':
                            page('/classes');
                            break;
                        case 'Registrations':
                            page('/registrations');
                            break;
                        case 'Effective':
                            page('/effective');
                            break;
                        default:
                            console.log('Unknown tab activation: ', event, i);
                    }
                }
            }).show();

            let registrationDialog = $("#registration-dialog").dialog({
                autoOpen: false,
                height: 400,
                width: 400,
                modal: true,
                buttons: {
                    Set: ui.setRegistration,
                    Cancel: function () {
                        registrationDialog.dialog("close");
                    }
                }
            });

            registrationDialog.find("form").on("submit", function (event) {
                event.preventDefault();
                ui.setRegistration();
            });

            let viewClassDialog = $("#view-class-dialog").dialog({
                autoOpen: false,
                height: 550,
                width: 750,
                modal: true,
                buttons: {
                    OK: function () {
                        viewClassDialog.dialog("close");
                        page('/classes');
                    }
                }
            });

            let viewRegistrationDialog = $("#view-registration-dialog").dialog({
                autoOpen: false,
                height: 550,
                width: 750,
                modal: true,
                buttons: {
                    OK: function () {
                        viewRegistrationDialog.dialog("close");
                        page('/registrations');
                    }
                }
            });

            let viewEffectiveDialog = $("#view-effective-dialog").dialog({
                autoOpen: false,
                height: 550,
                width: 750,
                modal: true,
                buttons: {
                    OK: function () {
                        viewEffectiveDialog.dialog("close");
                        page('/effective');
                    }
                }
            });

            let classDialog = $("#class-dialog").dialog({
                autoOpen: false,
                height: 400,
                width: 400,
                modal: true,
                buttons: {
                    Set: ui.setClass,
                    Cancel: function () {
                        classDialog.dialog("close");
                    }
                }
            });

            classDialog.find("form").on("submit", function (event) {
                event.preventDefault();
                ui.setClass();
            });

            ui.initPriorities();
            ui.initLocations();
            ui.initCategories();
        });

        $(document).on("click", "#new-registration-button", function () {

            document.getElementById("registered-form").reset();

            $("#registration-dialog").dialog("option", "title", "New Registration")
            $("#registration-dialog").dialog("open");
        });

        $(document).on("click", "#edit-registration-button", function () {
            let selectedData = ui.registrations.tabulator.getSelectedData(),
                data = selectedData[0];

            $("#alarm-name-input").val(data.name);
            $("#registered-class-input").val(data.class);
            $("#registered-priority-select").val(data.priority);
            $("#registered-location-select").val(data.location);
            $("#registered-category-select").val(data.category);
            $("#registered-rationale-textarea").val(data.rationale);
            $("#registered-correctiveaction-textarea").val(data.correctiveaction);
            $("#registered-pocusername-input").val(data.pointofcontactusername);
            $("#registered-form [name=filterable]").val([data.filterable]);
            $("#registered-form [name=latching]").val([data.latching]);
            $("#registered-ondelay-input").val(data.ondelayseconds);
            $("#registered-offdelay-input").val(data.offdelayseconds);
            $("#registered-maskedby-input").val(data.maskedby);
            $("#registered-screenpath-input").val(data.screenpath);
            $("#epicspv-input").val(data.epicspv);

            $("#registration-dialog").dialog("option", "title", "Edit Registration")
            $("#registration-dialog").dialog("open");
        });

        $(document).on("click", "#delete-registration-button", function () {
            let selectedData = registeredtable.getSelectedData();

            let params = "name=" + selectedData[0].name;

            let promise = fetch(contextPath + "/proxy/rest/registered", {
                method: "DELETE",
                body: new URLSearchParams(params),
                headers: {
                    "Content-type": 'application/x-www-form-urlencoded;charset=UTF-8'
                }
            });

            promise.then(response => {
                if (!response.ok) {
                    throw new Error("Network response not ok");
                }
                ui.registeredRowDeselected();
            })
                .catch(error => {
                    console.error('Delete failed: ', error)
                });
        });

        $(document).on("submit", "#registered-search-form", function (event) {
            event.preventDefault();
            ui.registrationSearch();
        });

        $(document).on("click", "#search-registration-button", function () {
            ui.registrationSearch();
        });

        $(document).on("click", "#new-class-button", function () {

            document.getElementById("class-form").reset();

            $("#class-dialog").dialog("option", "title", "New Class")
            $("#class-dialog").dialog("open");
        });

        $(document).on("click", "#view-class-button", function() {
            let selectedData = ui.classes.tabulator.getSelectedData(),
                data = selectedData[0];

            page('/classes/' + data.name);
        });

        $(document).on("click", "#view-registration-button", function() {
            let selectedData = ui.registrations.tabulator.getSelectedData(),
                data = selectedData[0];

            page('/registrations/' + data.name);
        });

        $(document).on("click", "#view-effective-button", function() {
            let selectedData = ui.effective.tabulator.getSelectedData(),
                data = selectedData[0];

            page('/effective/' + data.name);
        });

        $(document).on("click", "#edit-class-button", function () {
            let selectedData = ui.classes.tabulator.getSelectedData(),
                data = selectedData[0];

            $("#class-name-input").val(data.name);
            $("#priority-select").val(data.priority);
            $("#location-select").val(data.location);
            $("#category-select").val(data.category);
            $("#class-rationale-textarea").val(data.rationale);
            $("#class-correctiveaction-textarea").val(data.correctiveaction);
            $("#class-pocusername-input").val(data.pointofcontactusername);
            $("#class-form [name=filterable]").val([data.filterable]);
            $("#class-form [name=latching]").val([data.latching]);
            $("#class-ondelay-input").val(data.ondelayseconds);
            $("#class-offdelay-input").val(data.offdelayseconds);
            $("#class-maskedby-input").val(data.maskedby);
            $("#class-screenpath-input").val(data.screenpath);

            $("#class-dialog").dialog("option", "title", "Edit Class")
            $("#class-dialog").dialog("open");
        });

        $(document).on("click", "#delete-class-button", function () {
            let selectedData = ui.classes.tabulator.getSelectedData();

            let params = "name=" + selectedData[0].name;

            let promise = fetch(contextPath + "/proxy/rest/class", {
                method: "DELETE",
                body: new URLSearchParams(params),
                headers: {
                    "Content-type": 'application/x-www-form-urlencoded;charset=UTF-8'
                }
            });

            promise.then(response => {
                if (!response.ok) {
                    throw new Error("Network response not ok");
                }
                ui.classes.rowDeselected();
            })
                .catch(error => {
                    console.error('Delete failed: ', error)
                });
        });

        $(document).on("click", "#next-class-button", function(){
            ui.classes.next(db.classes);
        });

        $(document).on("click", "#next-registration-button", function(){
            ui.registrations.next(db.registrations);
        });

        $(document).on("click", "#next-effective-button", function() {
            ui.effective.next(db.effective);
        });

        $(document).on("click", "#previous-class-button", function() {
            ui.classes.previous(db.classes);
        });

        $(document).on("click", "#previous-registration-button", function() {
            ui.registrations.previous(db.registrations);
        });

        $(document).on("click", "#previous-effective-button", function() {
            ui.effective.previous(db.effective);
        });

        $(document).on("submit", "#class-search-form", function (event) {
            event.preventDefault();
            ui.classSearch();
        });

        $(document).on("click", "#search-class-button", function () {
            ui.classSearch();
        });


        $(document).on("click", "#search-effective-button", function () {
            ui.effectiveSearch();
        });

        $(document).on("submit", "#effective-search-form", function (event) {
            event.preventDefault();
            ui.effectiveSearch();
        });
    }
}

const ui = new UserInterface();

export default ui;