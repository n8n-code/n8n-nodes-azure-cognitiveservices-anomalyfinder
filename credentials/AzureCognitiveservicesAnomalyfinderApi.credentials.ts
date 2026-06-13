import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureCognitiveservicesAnomalyfinderApi implements ICredentialType {
        name = 'N8nDevAzureCognitiveservicesAnomalyfinderApi';

        displayName = 'Azure Cognitiveservices Anomalyfinder API';

        icon: Icon = { light: 'file:../nodes/AzureCognitiveservicesAnomalyfinder/azure-cognitiveservices-anomalyfinder.png', dark: 'file:../nodes/AzureCognitiveservicesAnomalyfinder/azure-cognitiveservices-anomalyfinder.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure Cognitiveservices Anomalyfinder API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
