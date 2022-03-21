// Allow CloudWatch to read source maps
import 'source-map-support/register'

import { APIGatewayProxyEvent } from 'aws-lambda'
import { SnsNotificationRepository } from '../common/sns-repository'
import { sendWebhookEvent } from './lib/main'

export async function handler(event: APIGatewayProxyEvent) {
  console.log('event: ', JSON.stringify(event))

  const topic = process.env.WEBHOOK_TOPIC

  if (!topic) {
    throw new Error('Webhook URL is required as "process.env.WEBHOOK_TOPIC"')
  }
exports.handler = function(event, context, callback) {

    var operation = event.operation;

    if (event.mailevents) {
        event.payload.mailevents = event.mailevents;
    }

    switch (operation) {
        case 'accepted':
            dynamo.put(event.payload, callback);
            break;
        case 'rejected':
            dynamo.put(event.payload, callback);
            break;
        case 'delivered':
            dynamo.put(event.payload, callback);
            break;
        case 'opened':
            dynamo.put(event.payload, callback);
            break;
        case 'failed':
            dynamo.put(event.payload, callback);
            break;
        case 'clicked':
            dynamo.put(event.payload, callback);
            break;
        case 'unsubscribed':
            dynamo.put(event.payload, callback);
            break;
        case 'complained':
            dynamo.put(event.payload, callback);
            break;
        case 'stored':
            dynamo.put(event.payload, callback);
            break;
        default:
            callback('Unknown operation: ${operation}');
    }
  const notification = new SnsNotificationRepository(topic)
  await sendWebhookEvent(event, notification)

  return {
    statusCode: 204,
    body: null,
  }
}
