function mockApiAccountCall() {
    inject(function($httpBackend) {
        $httpBackend.whenGET(/me/).respond({});
    });
}

function mockI18nCalls() {
    inject(function($httpBackend) {
        $httpBackend.whenGET(/i18n\/.*\/.+\.json/).respond({});
    });
}

function mockScriptsCalls() {
    inject(function($httpBackend) {
        $httpBackend.whenGET(/app\/.*/).respond({});
    });
}
