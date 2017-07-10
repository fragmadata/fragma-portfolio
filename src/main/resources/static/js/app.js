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
        "Predicting Network Alarms",
        "Music Recommendation Engine",
        "Text Analytics",
        "Click Stream Analytics",
        "Time series segmentation",
        "NSB Prospect Mart",
        "DataHub",
        "Intelligent NLP Search",
        "Geo Fencing",
        "HDInsights Migration",
        "Spend Analysis Cube in SSAS and PowerBI",
        "Text Classification",
        "Fraud Detection"
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

projectVerticalMap["Predicting Network Alarms"] = "Networks And Communications";
projectVerticalMap["Music Recommendation Engine"] = "Media And Entertainment";
projectVerticalMap["Text Analytics"] = "Media And Entertainment";
projectVerticalMap["Click Stream Analytics"] = "BFSI";
projectVerticalMap["Time series segmentation"] = "BFSI";
projectVerticalMap["NSB Prospect Mart"] = "BFSI";
projectVerticalMap["DataHub"] = "Software Solutions";
projectVerticalMap["Intelligent NLP Search"] = "BFSI";
projectVerticalMap["Geo Fencing"] = "Transportation";
projectVerticalMap["HDInsights Migration"] = "Procurement and Supply Chain";
projectVerticalMap["Spend Analysis Cube in SSAS and PowerBI"] = "Procurement and Supply Chain";
projectVerticalMap["Text Classification"] = "Procurement and Supply Chain";
projectVerticalMap["Fraud Detection"] = "Oil and Gas";

projectComponentMap["Predicting Network Alarms"] = {};
projectComponentMap["Predicting Network Alarms"]["Data Factory"]=true;
projectComponentMap["Predicting Network Alarms"]["HDInsights"]=true;
projectComponentMap["Predicting Network Alarms"]["Event and IOT Hub"]=true;
projectComponentMap["Predicting Network Alarms"]["Document DB"]=true;
projectComponentMap["Predicting Network Alarms"]["R Server"]=true;
projectComponentMap["Predicting Network Alarms"]["Stream Analytics"]=true;
projectComponentMap["Predicting Network Alarms"]["Power BI"]=true;

projectComponentMap["Music Recommendation Engine"] = {};
projectComponentMap["Music Recommendation Engine"]["Document DB"]=true;
projectComponentMap["Music Recommendation Engine"]["R Server"]=true;
projectComponentMap["Music Recommendation Engine"]["Azure ML"]=true;

projectComponentMap["Text Analytics"] = {};
projectComponentMap["Text Analytics"]["R Server"]=true;
projectComponentMap["Text Analytics"]["Azure ML"]=true;
projectComponentMap["Text Analytics"]["Power BI"]=true;
projectComponentMap["Text Analytics"]["Azure Search"]=true;

projectComponentMap["Click Stream Analytics"] = {};
projectComponentMap["Click Stream Analytics"]["HDInsights"]=true;
projectComponentMap["Click Stream Analytics"]["Event and IOT Hub"]=true;
projectComponentMap["Click Stream Analytics"]["Stream Analytics"]=true;

projectComponentMap["Time series segmentation"] = {};
projectComponentMap["Time series segmentation"]["Data Factory"]=true;
projectComponentMap["Time series segmentation"]["Azure Data Warehouse"]=true;
projectComponentMap["Time series segmentation"]["HDInsights"]=true;

projectComponentMap["NSB Prospect Mart"] = {};
projectComponentMap["NSB Prospect Mart"]["Data Factory"]=true;
projectComponentMap["NSB Prospect Mart"]["Azure Data Warehouse"]=true;
projectComponentMap["NSB Prospect Mart"]["HDInsights"]=true;

projectComponentMap["DataHub"] = {};
projectComponentMap["DataHub"]["Data Factory"]=true;
projectComponentMap["DataHub"]["Azure Data Warehouse"]=true;
projectComponentMap["DataHub"]["HDInsights"]=true;

projectComponentMap["Intelligent NLP Search"] = {};
projectComponentMap["Intelligent NLP Search"]["Document DB"]=true;
projectComponentMap["Intelligent NLP Search"]["R Server"]=true;
projectComponentMap["Intelligent NLP Search"]["Azure Search"]=true;

projectComponentMap["Geo Fencing"] = {};
projectComponentMap["Geo Fencing"]["Event and IOT Hub"]=true;
projectComponentMap["Geo Fencing"]["Stream Analytics"]=true;

projectComponentMap["HDInsights Migration"] = {};
projectComponentMap["HDInsights Migration"]["HDInsights"]=true;
projectComponentMap["HDInsights Migration"]["R Server"]=true;

projectComponentMap["Spend Analysis Cube in SSAS and PowerBI"] = {};
projectComponentMap["Spend Analysis Cube in SSAS and PowerBI"]["Azure Data Warehouse"]=true;
projectComponentMap["Spend Analysis Cube in SSAS and PowerBI"]["Power BI"]=true;
projectComponentMap["Spend Analysis Cube in SSAS and PowerBI"]["Azure SSAS"]=true;

projectComponentMap["Text Classification"] = {};
projectComponentMap["Text Classification"]["HDInsights"]=true;
projectComponentMap["Text Classification"]["R Server"]=true;

projectComponentMap["Fraud Detection"] = {};
projectComponentMap["Fraud Detection"]["Azure ML"]=true;
projectComponentMap["Fraud Detection"]["R Server"]=true;
projectComponentMap["Fraud Detection"]["Power BI"]=true;

projectDescriptionContent = {};
projectDescriptionContent["Predicting Network Alarms"] = {
        "businessChallenge":"Client was using oracle DB on premise for OLTP. They were looking for a on cloud solution for Data warehouse  and an anallytics platform",
        "fragmaDelivery":"Fragma Data provided a scalable architecture using Azure Data Platform components – Azure Data Factory, Azure EDW, and HD Insights for Big data and Analytcis",
        "outcome":"Helped client to on-board Azure Data Platform PaaS. Gave them a complete end-to-end  architecture to build EDW and devleop analytics on top of ot.  Partner brought in the required architecture skills to build a very scalable architecture. Client realized the benifits of Azure PaaS and moving other onpremise Data applications also to PaaS.",
        "techSolution":"Azure Data  Factory was used to pull data from on premise to Blob, Used polybase to load from blob to DWaaS. HDInsights HIVE is being used for ETL.. The anallyst team is also building prototypes on Spark."
};
projectDescriptionContent["Music Recommendation Engine"] = {
        "businessChallenge":"Client was using oracle DB on premise for OLTP. They were looking for a on cloud solution for Data warehouse  and an anallytics platform",
        "fragmaDelivery":"Fragma Data provided a scalable architecture using Azure Data Platform components – Azure Data Factory, Azure EDW, and HD Insights for Big data and Analytcis",
        "outcome":"Helped client to on-board Azure Data Platform PaaS. Gave them a complete end-to-end  architecture to build EDW and devleop analytics on top of ot.  Partner brought in the required architecture skills to build a very scalable architecture. Client realized the benifits of Azure PaaS and moving other onpremise Data applications also to PaaS.",
        "techSolution":"Azure Data  Factory was used to pull data from on premise to Blob, Used polybase to load from blob to DWaaS. HDInsights HIVE is being used for ETL.. The anallyst team is also building prototypes on Spark."
};
projectDescriptionContent["Text Analytics"] = {
        "businessChallenge":"Client was using oracle DB on premise for OLTP. They were looking for a on cloud solution for Data warehouse  and an anallytics platform",
        "fragmaDelivery":"Fragma Data provided a scalable architecture using Azure Data Platform components – Azure Data Factory, Azure EDW, and HD Insights for Big data and Analytcis",
        "outcome":"Helped client to on-board Azure Data Platform PaaS. Gave them a complete end-to-end  architecture to build EDW and devleop analytics on top of ot.  Partner brought in the required architecture skills to build a very scalable architecture. Client realized the benifits of Azure PaaS and moving other onpremise Data applications also to PaaS.",
        "techSolution":"Azure Data  Factory was used to pull data from on premise to Blob, Used polybase to load from blob to DWaaS. HDInsights HIVE is being used for ETL.. The anallyst team is also building prototypes on Spark."
};
projectDescriptionContent["Click Stream Analytics"] = {
        "businessChallenge":"Client was using oracle DB on premise for OLTP. They were looking for a on cloud solution for Data warehouse  and an anallytics platform",
        "fragmaDelivery":"Fragma Data provided a scalable architecture using Azure Data Platform components – Azure Data Factory, Azure EDW, and HD Insights for Big data and Analytcis",
        "outcome":"Helped client to on-board Azure Data Platform PaaS. Gave them a complete end-to-end  architecture to build EDW and devleop analytics on top of ot.  Partner brought in the required architecture skills to build a very scalable architecture. Client realized the benifits of Azure PaaS and moving other onpremise Data applications also to PaaS.",
        "techSolution":"Azure Data  Factory was used to pull data from on premise to Blob, Used polybase to load from blob to DWaaS. HDInsights HIVE is being used for ETL.. The anallyst team is also building prototypes on Spark."
};
projectDescriptionContent["Time series segmentation"] = {
        "businessChallenge":"Client was using oracle DB on premise for OLTP. They were looking for a on cloud solution for Data warehouse  and an anallytics platform",
        "fragmaDelivery":"Fragma Data provided a scalable architecture using Azure Data Platform components – Azure Data Factory, Azure EDW, and HD Insights for Big data and Analytcis",
        "outcome":"Helped client to on-board Azure Data Platform PaaS. Gave them a complete end-to-end  architecture to build EDW and devleop analytics on top of ot.  Partner brought in the required architecture skills to build a very scalable architecture. Client realized the benifits of Azure PaaS and moving other onpremise Data applications also to PaaS.",
        "techSolution":"Azure Data  Factory was used to pull data from on premise to Blob, Used polybase to load from blob to DWaaS. HDInsights HIVE is being used for ETL.. The anallyst team is also building prototypes on Spark."
};
projectDescriptionContent["NSB Prospect Mart"] = {
        "businessChallenge":"Client was using oracle DB on premise for OLTP. They were looking for a on cloud solution for Data warehouse  and an anallytics platform",
        "fragmaDelivery":"Fragma Data provided a scalable architecture using Azure Data Platform components – Azure Data Factory, Azure EDW, and HD Insights for Big data and Analytcis",
        "outcome":"Helped client to on-board Azure Data Platform PaaS. Gave them a complete end-to-end  architecture to build EDW and devleop analytics on top of ot.  Partner brought in the required architecture skills to build a very scalable architecture. Client realized the benifits of Azure PaaS and moving other onpremise Data applications also to PaaS.",
        "techSolution":"Azure Data  Factory was used to pull data from on premise to Blob, Used polybase to load from blob to DWaaS. HDInsights HIVE is being used for ETL.. The anallyst team is also building prototypes on Spark."
};
projectDescriptionContent["Intelligent NLP Search"] = {
        "businessChallenge":"Client was using oracle DB on premise for OLTP. They were looking for a on cloud solution for Data warehouse  and an anallytics platform",
        "fragmaDelivery":"Fragma Data provided a scalable architecture using Azure Data Platform components – Azure Data Factory, Azure EDW, and HD Insights for Big data and Analytcis",
        "outcome":"Helped client to on-board Azure Data Platform PaaS. Gave them a complete end-to-end  architecture to build EDW and devleop analytics on top of ot.  Partner brought in the required architecture skills to build a very scalable architecture. Client realized the benifits of Azure PaaS and moving other onpremise Data applications also to PaaS.",
        "techSolution":"Azure Data  Factory was used to pull data from on premise to Blob, Used polybase to load from blob to DWaaS. HDInsights HIVE is being used for ETL.. The anallyst team is also building prototypes on Spark."
};
projectDescriptionContent["Geo Fencing"] = {
        "businessChallenge":"Client was using oracle DB on premise for OLTP. They were looking for a on cloud solution for Data warehouse  and an anallytics platform",
        "fragmaDelivery":"Fragma Data provided a scalable architecture using Azure Data Platform components – Azure Data Factory, Azure EDW, and HD Insights for Big data and Analytcis",
        "outcome":"Helped client to on-board Azure Data Platform PaaS. Gave them a complete end-to-end  architecture to build EDW and devleop analytics on top of ot.  Partner brought in the required architecture skills to build a very scalable architecture. Client realized the benifits of Azure PaaS and moving other onpremise Data applications also to PaaS.",
        "techSolution":"Azure Data  Factory was used to pull data from on premise to Blob, Used polybase to load from blob to DWaaS. HDInsights HIVE is being used for ETL.. The anallyst team is also building prototypes on Spark."
};
projectDescriptionContent["HDInsights Migration"] = {
        "businessChallenge":"Client was using oracle DB on premise for OLTP. They were looking for a on cloud solution for Data warehouse  and an anallytics platform",
        "fragmaDelivery":"Fragma Data provided a scalable architecture using Azure Data Platform components – Azure Data Factory, Azure EDW, and HD Insights for Big data and Analytcis",
        "outcome":"Helped client to on-board Azure Data Platform PaaS. Gave them a complete end-to-end  architecture to build EDW and devleop analytics on top of ot.  Partner brought in the required architecture skills to build a very scalable architecture. Client realized the benifits of Azure PaaS and moving other onpremise Data applications also to PaaS.",
        "techSolution":"Azure Data  Factory was used to pull data from on premise to Blob, Used polybase to load from blob to DWaaS. HDInsights HIVE is being used for ETL.. The anallyst team is also building prototypes on Spark."
};
projectDescriptionContent["Spend Analysis Cube in SSAS and PowerBI"] = {
        "businessChallenge":"Client was using oracle DB on premise for OLTP. They were looking for a on cloud solution for Data warehouse  and an anallytics platform",
        "fragmaDelivery":"Fragma Data provided a scalable architecture using Azure Data Platform components – Azure Data Factory, Azure EDW, and HD Insights for Big data and Analytcis",
        "outcome":"Helped client to on-board Azure Data Platform PaaS. Gave them a complete end-to-end  architecture to build EDW and devleop analytics on top of ot.  Partner brought in the required architecture skills to build a very scalable architecture. Client realized the benifits of Azure PaaS and moving other onpremise Data applications also to PaaS.",
        "techSolution":"Azure Data  Factory was used to pull data from on premise to Blob, Used polybase to load from blob to DWaaS. HDInsights HIVE is being used for ETL.. The anallyst team is also building prototypes on Spark."
};
projectDescriptionContent["Text Classification"] = {
        "businessChallenge":"Client was using oracle DB on premise for OLTP. They were looking for a on cloud solution for Data warehouse  and an anallytics platform",
        "fragmaDelivery":"Fragma Data provided a scalable architecture using Azure Data Platform components – Azure Data Factory, Azure EDW, and HD Insights for Big data and Analytcis",
        "outcome":"Helped client to on-board Azure Data Platform PaaS. Gave them a complete end-to-end  architecture to build EDW and devleop analytics on top of ot.  Partner brought in the required architecture skills to build a very scalable architecture. Client realized the benifits of Azure PaaS and moving other onpremise Data applications also to PaaS.",
        "techSolution":"Azure Data  Factory was used to pull data from on premise to Blob, Used polybase to load from blob to DWaaS. HDInsights HIVE is being used for ETL.. The anallyst team is also building prototypes on Spark."
};
projectDescriptionContent["Fraud Detection"] = {
        "businessChallenge":"Client was using oracle DB on premise for OLTP. They were looking for a on cloud solution for Data warehouse  and an anallytics platform",
        "fragmaDelivery":"Fragma Data provided a scalable architecture using Azure Data Platform components – Azure Data Factory, Azure EDW, and HD Insights for Big data and Analytcis",
        "outcome":"Helped client to on-board Azure Data Platform PaaS. Gave them a complete end-to-end  architecture to build EDW and devleop analytics on top of ot.  Partner brought in the required architecture skills to build a very scalable architecture. Client realized the benifits of Azure PaaS and moving other onpremise Data applications also to PaaS.",
        "techSolution":"Azure Data  Factory was used to pull data from on premise to Blob, Used polybase to load from blob to DWaaS. HDInsights HIVE is being used for ETL.. The anallyst team is also building prototypes on Spark."
};
projectDescriptionContent["DataHub"] ={
    "businessChallenge":"Client was using oracle DB on premise for OLTP. They were looking for a on cloud solution for Data warehouse  and an anallytics platform",
    "fragmaDelivery":"Fragma Data provided a scalable architecture using Azure Data Platform components – Azure Data Factory, Azure EDW, and HD Insights for Big data and Analytcis",
    "outcome":"Helped client to on-board Azure Data Platform PaaS. Gave them a complete end-to-end  architecture to build EDW and devleop analytics on top of ot.  Partner brought in the required architecture skills to build a very scalable architecture. Client realized the benifits of Azure PaaS and moving other onpremise Data applications also to PaaS.",
    "techSolution":"Azure Data  Factory was used to pull data from on premise to Blob, Used polybase to load from blob to DWaaS. HDInsights HIVE is being used for ETL.. The anallyst team is also building prototypes on Spark."
};

$(document).ready(function() {
    console.log("Before Rendering projects list");
    renderProjectsList();
});

function renderProjectsList() {
    console.log("Rendering projects list");
    var projectTable = new ProjectTable(components, projects, projectComponentMap, verticals, projectVerticalMap, projectDescriptionContent)
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

function ProjectTable(components, projects, projectComponentMap, verticals, projectVerticalMap,projectDescriptionContent) {
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
    self.projectDescriptionContent = projectDescriptionContent;

    self.projectHasComponent = function(project, component) {
        if(projectComponentMap[project][component]) {
            return true;
        } else {
            return false;
        }
    };

    self.renderProject = function(project) {
        return self.chosenComponents().some(function(component) { return projectComponentMap[project][component];})

        && self.chosenVerticals().some(function(vertical){return projectVerticalMap[project]==vertical});
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



