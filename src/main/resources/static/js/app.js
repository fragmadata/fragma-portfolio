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
        "businessChallenge":"Client is leading Data Center and Network Communications service provider. Thousands of network alarms gets generated every minute, only some of them are direct alerts and others are sequence alarms. The business problem was to understand pattern of alarm sequence  and predict potential Alarms. The predicted alarm would be based on sequence of alarms ",
        "fragmaDelivery":"We used data mining algorithms to find patterns in the historical alarm data. Used Rev R and AzureML for building Association Rules using Apriori Asscociation rule mining. Real time network prediction system was developed using Azure Data Platform components – Azure Data Factory, Azure Document DB, Event Hub, Stream Analytics and Power BI.",
        "outcome":"Predicting next upcoming alarms helped business team to Prioritize the high impact alarms per region/segment to avoid Business Impact. Technical support team is using predictive Monitoring for proactive maintainence.",
        "techSolution":"Rev R was used to build assication rules and DocumentDB was used to store these rules as JSON's for retriving in low latency(<15ms) time. Rules Matching engine reads the generated alarms and publishes predicted alarms to event hub. Azure Stream reads them from event hub, removes dupicates and pushlish them to PowerBI for real time monitoring."
};
projectDescriptionContent["Music Recommendation Engine"] = {
        "businessChallenge":"Client is a commercial music streaming service providing free and licensed music and provides both Indian and international music content. To build a recommendation engine to suggest relavent songs to users based on their pattern of listening and choice of music. Client has a warehouse of more than 10millions untagged songs, so we had to build an automation system to tag these songs by Genre, Male/Female Voice, Artist, Style etc",
        "fragmaDelivery":"We used advanced music analyzing libraries in 'R' to extract features from wave/mp3 files. We splitted the song in to '5sec' intervals batches, and extracted features for each bacth. For each batch, we extracted features like MPCC, Pause rate, Pitch, Timbre, Acoustics etc upto 60 features. Then used clustering to segment these songs, the segments were tagged with Genre Happy, Sad, Romantic etc. ",
        "outcome":"Helped client to automate tagging of Millions of songs and segment similar songs. Recommendation engine was built on top of segmented songs for personalized customer experience. ",
        "techSolution":"The songs dump was stored on blob, R was used to extract upto 60 feature and were then stored in Azure SQL. Based on user profiles and Genre of songs, a recommendation prototype was built using Cognitive Services Recommendation Engine"
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
        "businessChallenge":"Build  a data analytics platform to onboard Partner data. The platform supports ingestion of data coming from multiple partners in unstructured/semi-structured format,  cleansing using various business rules, data deduping,  data enrichment and a quality scoring engine. This is prospect customers data and will be used to roll out campaigns.",
        "fragmaDelivery":"Fragma Data provided a scalable architecture using Azure Data Platform components – Azure Data Factory, Azure EDW, and HD Insights to build end-to-end platform.",
        "outcome":"Fragma built an end-to-end data pipeline to onboard new Partners.  This initiative is driven by newly formed BIU  called NSB[Network Service Business]. The BIU is responsible to drive its own P&L and has a target to achieve around 500Cr+ of business through Parrtners.  Fragma is helping NSB io buiid  a sclable platform on Azure Data Platform(Paa) from scratch. ",
        "techSolution":"Azure Data  Factory  is being used for entire platform orchestration, HDInsights is being used to process unstructured data and apply business rules to cleanse data.  The cleansed data is loaded to Azure EDW to perform deduping and quality scoring. The downstream campaign applications will be integrated with EDW to rollout campaigns."
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
        "businessChallenge":"Client had their Data Science Classification Project – deployed in on premise infra. Current deployment is using multiple components in single machine and facing scalability challenges. Project objective was to build a horizontally scalable architecture.",
        "fragmaDelivery":"Fragma Data provided a new scalable technical architecture using Azure Data Platform components – R, HDInsights for Mahout, Elastic Search and Node.js running in VMs.",
        "outcome":"It was as-is migration but partner brought in the required architecture skills to build a very scalable architecture. With new architecture both HDInsight and Elastic Search can be scaled out by adding more nodes and address growing business demand.",
        "techSolution":"Existing solution had R and Mahout running on single Machine. Partner used HDInsight to move R and Mahout workloads to HDInsight. Elastic Search was setup in its 2 node cluster and made the architecture scalable. This also sets the platform to move to Azure Search in futture."
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

var projectSolutionScreens = {};

projectSolutionScreens["Predicting Network Alarms"] = 3;
projectSolutionScreens["Music Recommendation Engine"] = 3;
projectSolutionScreens["Text Analytics"] = 3;
projectSolutionScreens["Click Stream Analytics"] = 3;
projectSolutionScreens["Time series segmentation"] = 3;
projectSolutionScreens["NSB Prospect Mart"] = 3;
projectSolutionScreens["DataHub"] = 3;
projectSolutionScreens["Intelligent NLP Search"] = 3;
projectSolutionScreens["Geo Fencing"] = 3;
projectSolutionScreens["HDInsights Migration"] = 3;
projectSolutionScreens["Spend Analysis Cube in SSAS and PowerBI"] = 2;
projectSolutionScreens["Text Classification"] = 3;
projectSolutionScreens["Fraud Detection"] = 2;

$(document).ready(function() {
    console.log("Before Rendering projects list");
    renderProjectsList();
});

function renderProjectsList() {
    console.log("Rendering projects list");
    var projectTable = new ProjectTable(components, projects, projectComponentMap, verticals, projectVerticalMap, projectDescriptionContent, projectSolutionScreens)
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

function ProjectTable(components, projects, projectComponentMap, verticals, projectVerticalMap,projectDescriptionContent,projectSolutionScreens) {
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
    self.projectSolutionScreens = projectSolutionScreens;

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



