import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureCognitiveservicesAnomalyfinder implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Azure Cognitiveservices Anomalyfinder',
                name: 'N8nDevAzureCognitiveservicesAnomalyfinder',
                icon: { light: 'file:./azure-cognitiveservices-anomalyfinder.png', dark: 'file:./azure-cognitiveservices-anomalyfinder.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Anomaly Finder API detects anomalies in time series data using trained models.',
                defaults: { name: 'Azure Cognitiveservices Anomalyfinder' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAzureCognitiveservicesAnomalyfinderApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}
