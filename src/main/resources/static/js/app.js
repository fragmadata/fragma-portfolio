var components = [
                "Data Factory",
                "Azure Data Warehouse",
                "HDInsights",
                "Event and IOT Hub",
                "Document DB",
                "R Server",
                "Azure ML",
                "Stream Analytics",
                "Power BI",
                "Azure SSAS",
                "Azure Search"
];

var projects = [
        "TCL-Predicting Network Alarms",
        "Gaana- Music Recommendation Engine",
        "Times Of India- Text Analytics",
        "Bajaj Finserv-Click Stream Analytics",
        "Bajaj Finserv-Time series segmentation",
        "Bajaj Finserv-NSB Prospect Mart",
        "Tavant Systems-DataHub",
        "SBI-Intelligent NLP Search",
        "ECFY-Geo Fencing",
        "GEP-HDInsights Migration",
        "GEP-Spend Analysis Cube in SSAS and PowerBI",
        "GEP- Text Classification",
        "Essar - Fraud Detection"
];

var verticals = [
    "Networks And Communications",
    "Media And Entertainment",
    "BFSI",
    "Software Solutions",
    "Transportation",
    "Procurement and Supply Chain",
    "Oil and Gas"
];


var projectComponentMap = {};
var projectVerticalMap = {};

projectVerticalMap["TCL-Predicting Network Alarms"] = "Networks And Communications";
projectVerticalMap["Gaana- Music Recommendation Engine"] = "Media And Entertainment";
projectVerticalMap["Times Of India- Text Analytics"] = "Media And Entertainment";
projectVerticalMap["Bajaj Finserv-Click Stream Analytics"] = "BFSI";
projectVerticalMap["Bajaj Finserv-Time series segmentation"] = "BFSI";
projectVerticalMap["Bajaj Finserv-NSB Prospect Mart"] = "BFSI";
projectVerticalMap["Tavant Systems-DataHub"] = "Software Solutions";
projectVerticalMap["SBI-Intelligent NLP Search"] = "BFSI";
projectVerticalMap["ECFY-Geo Fencing"] = "Transportation";
projectVerticalMap["GEP-HDInsights Migration"] = "Procurement and Supply Chain";
projectVerticalMap["GEP-Spend Analysis Cube in SSAS and PowerBI"] = "Procurement and Supply Chain";
projectVerticalMap["GEP- Text Classification"] = "Procurement and Supply Chain";
projectVerticalMap["Essar - Fraud Detection"] = "Oil and Gas";

projectComponentMap["TCL-Predicting Network Alarms"] = {};
projectComponentMap["TCL-Predicting Network Alarms"]["Data Factory"]=true;
projectComponentMap["TCL-Predicting Network Alarms"]["HDInsights"]=true;
projectComponentMap["TCL-Predicting Network Alarms"]["Event and IOT Hub"]=true;
projectComponentMap["TCL-Predicting Network Alarms"]["Document DB"]=true;
projectComponentMap["TCL-Predicting Network Alarms"]["R Server"]=true;
projectComponentMap["TCL-Predicting Network Alarms"]["Stream Analytics"]=true;
projectComponentMap["TCL-Predicting Network Alarms"]["Power BI"]=true;

projectComponentMap["Gaana- Music Recommendation Engine"] = {};
projectComponentMap["Gaana- Music Recommendation Engine"]["Document DB"]=true;
projectComponentMap["Gaana- Music Recommendation Engine"]["R Server"]=true;
projectComponentMap["Gaana- Music Recommendation Engine"]["Azure ML"]=true;

projectComponentMap["Times Of India- Text Analytics"] = {};
projectComponentMap["Times Of India- Text Analytics"]["R Server"]=true;
projectComponentMap["Times Of India- Text Analytics"]["Azure ML"]=true;
projectComponentMap["Times Of India- Text Analytics"]["Power BI"]=true;
projectComponentMap["Times Of India- Text Analytics"]["Azure Search"]=true;

projectComponentMap["Bajaj Finserv-Click Stream Analytics"] = {};
projectComponentMap["Bajaj Finserv-Click Stream Analytics"]["HDInsights"]=true;
projectComponentMap["Bajaj Finserv-Click Stream Analytics"]["Event and IOT Hub"]=true;
projectComponentMap["Bajaj Finserv-Click Stream Analytics"]["Stream Analytics"]=true;

projectComponentMap["Bajaj Finserv-Time series segmentation"] = {};
projectComponentMap["Bajaj Finserv-Time series segmentation"]["Data Factory"]=true;
projectComponentMap["Bajaj Finserv-Time series segmentation"]["Azure Data Warehouse"]=true;
projectComponentMap["Bajaj Finserv-Time series segmentation"]["HDInsights"]=true;

projectComponentMap["Bajaj Finserv-NSB Prospect Mart"] = {};
projectComponentMap["Bajaj Finserv-NSB Prospect Mart"]["Data Factory"]=true;
projectComponentMap["Bajaj Finserv-NSB Prospect Mart"]["Azure Data Warehouse"]=true;
projectComponentMap["Bajaj Finserv-NSB Prospect Mart"]["HDInsights"]=true;

projectComponentMap["Tavant Systems-DataHub"] = {};
projectComponentMap["Tavant Systems-DataHub"]["Data Factory"]=true;
projectComponentMap["Tavant Systems-DataHub"]["Azure Data Warehouse"]=true;
projectComponentMap["Tavant Systems-DataHub"]["HDInsights"]=true;

projectComponentMap["SBI-Intelligent NLP Search"] = {};
projectComponentMap["SBI-Intelligent NLP Search"]["Document DB"]=true;
projectComponentMap["SBI-Intelligent NLP Search"]["R Server"]=true;
projectComponentMap["SBI-Intelligent NLP Search"]["Azure Search"]=true;

projectComponentMap["ECFY-Geo Fencing"] = {};
projectComponentMap["ECFY-Geo Fencing"]["Event and IOT Hub"]=true;
projectComponentMap["ECFY-Geo Fencing"]["Stream Analytics"]=true;

projectComponentMap["GEP-HDInsights Migration"] = {};
projectComponentMap["GEP-HDInsights Migration"]["HDInsights"]=true;
projectComponentMap["GEP-HDInsights Migration"]["R Server"]=true;

projectComponentMap["GEP-Spend Analysis Cube in SSAS and PowerBI"] = {};
projectComponentMap["GEP-Spend Analysis Cube in SSAS and PowerBI"]["Azure Data Warehouse"]=true;
projectComponentMap["GEP-Spend Analysis Cube in SSAS and PowerBI"]["Power BI"]=true;
projectComponentMap["GEP-Spend Analysis Cube in SSAS and PowerBI"]["Azure SSAS"]=true;

projectComponentMap["GEP- Text Classification"] = {};
projectComponentMap["GEP- Text Classification"]["HDInsights"]=true;
projectComponentMap["GEP- Text Classification"]["R Server"]=true;

projectComponentMap["Essar - Fraud Detection"] = {};
projectComponentMap["Essar - Fraud Detection"]["Azure ML"]=true;
projectComponentMap["Essar - Fraud Detection"]["R Server"]=true;
projectComponentMap["Essar - Fraud Detection"]["Power BI"]=true;

$(document).ready(function() {
    console.log("Before Rendering projects list");
    renderProjectsList();
});

function renderProjectsList() {
    console.log("Rendering projects list");
    var projectTable = new ProjectTable(components, projects, projectComponentMap, verticals, projectVerticalMap)
    ko.applyBindings(projectTable);
    window.addEventListener('popstate', function(event) {
        console.log("Poping state");
        console.log(event);
        if(event.state) {
            projectTable.handlePop(event.state);
        } else {
            projectTable.handlePop(null);
        }
    });
}

function ProjectTable(components, projects, projectComponentMap, verticals, projectVerticalMap) {
    var self = this;
    self.components = ko.observableArray(Array.from(components));
    self.projects = ko.observableArray(projects);
    self.verticals = ko.observableArray(Array.from(verticals));
    self.chosenComponents = ko.observableArray(Array.from(components));
    self.projectComponentMap = projectComponentMap;
    self.selectedProject = ko.observable();
    self.selectedState = ko.observable();
    self.chosenVerticals = ko.observableArray(Array.from(verticals));
    self.projectVerticalMap = projectVerticalMap;

    self.projectHasComponent = function(project, component) {
        if(projectComponentMap[project][component]) {
            return true;
        } else {
            return false;
        }
    };

    self.renderProject = function(project) {
        return self.chosenComponents().some(function(element) { return projectComponentMap[project][element];});
    }

    self.projectHasComponentTdCss = function(project, component) {
        if(projectComponentMap[project][component]) {
            return "usedcomponent";
        } else {
            return "";
        }
    };

    self.goHome = function() {
        self.onProjectSelection("","");
    }

    self.chooseAllComponents = function() {
        self.chosenComponents(Array.from(components));
    };

    self.chooseNoComponents = function() {
        self.chosenComponents([]);
    };

    self.chooseAllVerticals = function() {
        self.chosenVerticals(Array.from(verticals));
    };

    self.chooseNoVerticals = function() {
        self.chosenVerticals([]);
    };

    self.onProjectSelection = function(selectedProject, state, handlingPop) {
        console.log("In onProjectSelection");
        self.selectedProject(selectedProject);
        if(!state) {
            state = "Desc";
        }
        self.selectedState(state);
        if(!handlingPop) {
            history.pushState({project:selectedProject, state:state},selectedProject,"#"+selectedProject.replace(/\s/g, '')+"#"+state);
        }
        return false;
    }

    self.isSelectedProject = function(project) {
        return self.selectedProject() == project;
    }

    self.showProject = function(projectAndState) {
        if(projectAndState) {
            self.onProjectSelection(projectAndState.project, projectAndState.state);
        } else {
            self.onProjectSelection("");
        }
    }

    self.handlePop = function(projectAndState) {
        if(projectAndState) {
            self.onProjectSelection(projectAndState.project, projectAndState.state,true);
        } else {
            self.onProjectSelection("","", true);
        }
    }

    self.noProjectSelected = function() {
        console.log("Selected Project: " + self.selectedProject());
        return !self.selectedProject();
    }

    self.onDescription = function() {
        console.log("Selected description");
        self.onProjectSelection(self.selectedProject(), 'Desc')
    }

    self.onSolution = function() {
        console.log("Selected solution");
        self.onProjectSelection(self.selectedProject(), 'Soln')
    }
}



