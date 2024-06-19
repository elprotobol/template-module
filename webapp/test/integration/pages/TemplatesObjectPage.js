sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'com.tandem.templatemodule',
            componentId: 'TemplatesObjectPage',
            contextPath: '/Templates'
        },
        CustomPageDefinitions
    );
});