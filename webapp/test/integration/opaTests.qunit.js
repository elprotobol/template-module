sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/tandem/templatemodule/test/integration/FirstJourney',
		'com/tandem/templatemodule/test/integration/pages/TemplatesList',
		'com/tandem/templatemodule/test/integration/pages/TemplatesObjectPage'
    ],
    function(JourneyRunner, opaJourney, TemplatesList, TemplatesObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/tandem/templatemodule') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheTemplatesList: TemplatesList,
					onTheTemplatesObjectPage: TemplatesObjectPage
                }
            },
            opaJourney.run
        );
    }
);