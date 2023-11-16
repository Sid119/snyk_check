from typing import List, Optional
import logging
import json
import boto3
from functools import lru_cache
from boto3.dynamodb.conditions import Key
from pydantic import BaseModel
from mypy_boto3_dynamodb import DynamoDBServiceResource
from mypy_boto3_dynamodb.service_resource import Table

logger = logging.getLogger(__name__)


DYNAMODB_TABLE_NAME = "cms_single_table"
AWS_CLIENT_REGION = "us-west-2"
DYNAMODB_ENDPOINT_URL = "http://localhost:8000"


dynamo_db_client = boto3.client(
    "dynamodb", region_name=AWS_CLIENT_REGION, endpoint_url=DYNAMODB_ENDPOINT_URL
)


def get_dynamodb_resource() -> DynamoDBServiceResource:
    logger.info("AWS_CLIENT_REGION: %s", AWS_CLIENT_REGION)
    logger.info("DYNAMODB_ENDPOINT_URL: %s", DYNAMODB_ENDPOINT_URL)
    dynamodb: DynamoDBServiceResource = boto3.resource(
        "dynamodb",
        region_name=AWS_CLIENT_REGION,
        endpoint_url=DYNAMODB_ENDPOINT_URL,
    )
    return dynamodb


def get_table() -> Table:
    dynamo_resource = get_dynamodb_resource()
    logger.info("DYNAMODB_TABLE_NAME: %s", DYNAMODB_TABLE_NAME)
    table: Table = dynamo_resource.Table(DYNAMODB_TABLE_NAME)
    return table


def delete_table(table_name: str):
    table_names = dynamo_db_client.list_tables().get("TableNames", [])
    if table_name in table_names:
        print(f"Deleting table: {table_name}")
        dynamo_db_client.delete_table(TableName=table_name)


def create_table(table_name: str):
    print(f"Creating table: {table_name}")
    dynamo_db_client.create_table(
        AttributeDefinitions=[
            {"AttributeName": "PK", "AttributeType": "S"},
            {"AttributeName": "SK", "AttributeType": "S"},
            {"AttributeName": "GSI1_PK", "AttributeType": "S"},
            {"AttributeName": "GSI1_SK", "AttributeType": "S"},
            {"AttributeName": "GSI2_PK", "AttributeType": "S"},
            {"AttributeName": "GSI2_SK", "AttributeType": "S"},
            {"AttributeName": "GSI3_PK", "AttributeType": "S"},
            {"AttributeName": "GSI3_SK", "AttributeType": "S"},
        ],
        TableName=table_name,
        KeySchema=[
            {"AttributeName": "PK", "KeyType": "HASH"},
            {"AttributeName": "SK", "KeyType": "RANGE"},
        ],
        GlobalSecondaryIndexes=[
            {
                "IndexName": "gsi1",
                "KeySchema": [
                    {"AttributeName": "GSI1_PK", "KeyType": "HASH"},
                    {"AttributeName": "GSI1_SK", "KeyType": "RANGE"},
                ],
                "Projection": {"ProjectionType": "ALL"},
            },
            {
                "IndexName": "gsi2",
                "KeySchema": [
                    {"AttributeName": "GSI2_PK", "KeyType": "HASH"},
                    {"AttributeName": "GSI2_SK", "KeyType": "RANGE"},
                ],
                "Projection": {"ProjectionType": "ALL"},
            },
            {
                "IndexName": "gsi3",
                "KeySchema": [
                    {"AttributeName": "GSI3_PK", "KeyType": "HASH"},
                    {"AttributeName": "GSI3_SK", "KeyType": "RANGE"},
                ],
                "Projection": {"ProjectionType": "ALL"},
            },
        ],
        BillingMode="PAY_PER_REQUEST",
    )


KEY_ACCOUNT = "ACCOUNT#"
KEY_SUBSCRIPTION = "SUBSCRIPTION#"
KEY_TEMPLATE = "TEMPLATE#"
KEY_CATEGORY = "CATEGORY#"


def populate_subscription_data():
    customer_id = "102"
    status = "Active"
    tenant_id = "37748748dkldhj938397389"
    type = "premium"
    tenant_code = "Cloudeq india pvt ltd"
    account_subscription_data = {
        "customer": {
            "id": customer_id,
            "name": "Cloudeq india pvt ltd",
            "createAt": "2023-09-21T00:00:00.000Z",
            "status": status,
        },
        "users": [
            {
                "id": "102",
                "name": "Shanon Rob",
                "emailId": "shanoon@cloudeq.com",
                "roles": ["Admin", "ContractAdmin"],
                "priviledge": ["ContractRead", "ContractWrite"],
            },
            {
                "id": "103",
                "name": "Gayle Yost",
                "emailId": "gayle@cloudeq.com",
                "roles": ["TempalteAdmin"],
                "privilege": ["TemplateRead", "TemplateWrite"],
            },
            {
                "id": "101",
                "name": "Melissa Rowe",
                "emailId": "melissa@cloudeq.com",
                "roles": ["TempalteAdmin"],
                "privilege": ["TemplateRead", "TemplateWrite"],
            },
            {
                "id": "104",
                "name": "Blake Fisher",
                "emailId": "blake@cloudeq.com",
                "roles": ["TempalteAdmin"],
                "privilege": ["TemplateRead", "TemplateWrite"],
            },
            {
                "id": "200",
                "name": "Sandeep Kumar",
                "emailId": "sandeep.kumar@cloudeq.com",
                "roles": ["Admin", "ContractAdmin"],
                "priviledge": ["ContractRead", "ContractWrite"],
            },
            {
                "id": "201",
                "name": "Sachin Singh",
                "emailId": "sachin.singh@cloudeq.com",
                "roles": ["Admin", "ContractAdmin"],
                "priviledge": ["ContractRead", "ContractWrite"],
            },
            {
                "id": "202",
                "name": "Varun Singh Chauhan",
                "emailId": "varun.chauhan@cloudeq.com",
                "roles": ["Admin", "ContractAdmin"],
                "priviledge": ["ContractRead", "ContractWrite"],
            },
            {
                "id": "203",
                "name": "Kumar Saurabh",
                "emailId": "saurabh.kumar@cloudeq.com",
                "roles": ["Admin", "ContractAdmin"],
                "priviledge": ["ContractRead", "ContractWrite"],
            },
            {
                "id": "204",
                "name": "Kamaludin",
                "emailId": "kamalu.din@cloudeq.com",
                "roles": ["Admin", "ContractAdmin"],
                "priviledge": ["ContractRead", "ContractWrite"],
            },
            {
                "id": "205",
                "name": "Ashwani Sharma",
                "emailId": "ashwani.sharma@cloudeq.com",
                "roles": ["Admin", "ContractAdmin"],
                "priviledge": ["ContractRead", "ContractWrite"],
            },
            {
                "id": "206",
                "name": "Amandeep Singh",
                "emailId": "amandeep.singh01@cloudeq.com",
                "roles": ["Admin", "ContractAdmin"],
                "priviledge": ["ContractRead", "ContractWrite"],
            },
            {
                "id": "207",
                "name": "Ankit agarwal",
                "emailId": "ankit.agarwal@cloudeq.com",
                "roles": ["Admin", "ContractAdmin"],
                "priviledge": ["ContractRead", "ContractWrite"],
            },
            {
                "id": "208",
                "name": "Bhagavan Mokshith",
                "emailId": "mokshith.bhagavan@cloudeq.com",
                "roles": ["Admin", "ContractAdmin"],
                "priviledge": ["ContractRead", "ContractWrite"],
            }, 
            {
                "id": "209",
                "name": "Kona Naga Manikanta Raghuveer",
                "emailId": "kona.raghuveer@cloudeq.com",
                "roles": ["Admin", "ContractAdmin"],
                "priviledge": ["ContractRead", "ContractWrite"],
            },            
            {
                "id": "210",
                "name": "Bhupinder Singh",
                "emailId": "bhupinder.singh@cloudeq.com",
                "roles": ["Admin", "ContractAdmin"],
                "priviledge": ["ContractRead", "ContractWrite"],
            },
            {
                "id": "211",
                "name": "Gaurav Gupta",
                "emailId": "gaurav.gupta@cloudeq.com",
                "roles": ["Admin", "ContractAdmin"],
                "priviledge": ["ContractRead", "ContractWrite"],
            },
            {
                "id": "212",
                "name": "Mandheer Singh Maan",
                "emailId": "mandheer.maan@cloudeq.com",
                "roles": ["Admin", "ContractAdmin"],
                "priviledge": ["ContractRead", "ContractWrite"],
            },
            {
                "id": "213",
                "name": "Moiza Shafiq",
                "emailId": "moiza.shafiq@cloudeq.com",
                "roles": ["Admin", "ContractAdmin"],
                "priviledge": ["ContractRead", "ContractWrite"],
            },
            {
                "id": "214",
                "name": "Prashant Bhatnagar",
                "emailId": "prashant.bhatnagar@cloudeq.com",
                "roles": ["Admin", "ContractAdmin"],
                "priviledge": ["ContractRead", "ContractWrite"],
            },
            {
                "id": "215",
                "name": "Shashank Santosh Amilkanthwar",
                "emailId": "shashank.amilkanthwar@cloudeq.com",
                "roles": ["Admin", "ContractAdmin"],
                "priviledge": ["ContractRead", "ContractWrite"],
            },
            {
                "id": "216",
                "name": "Siddharth Awasthi",
                "emailId": "siddharth.awasthi@cloudeq.com",
                "roles": ["Admin", "ContractAdmin"],
                "priviledge": ["ContractRead", "ContractWrite"],
            },
            {
                "id": "217",
                "name": "Yadvinder",
                "emailId": "yadvinder@cloudeq.com",
                "roles": ["Admin", "ContractAdmin"],
                "priviledge": ["ContractRead", "ContractWrite"],
            },
            {
                "id": "218",
                "name": "Gurminder Singh",
                "emailId": "gerry.singh@cloudeq.com",
                "roles": ["Admin", "ContractAdmin"],
                "priviledge": ["ContractRead", "ContractWrite"],
            },
        ],
        "type": type,
        "createdAt": "2023-09-21T00:00:00.000Z",
        "expiryDate": "2023-09-21T00:00:00.000Z",
        "startDate": "2023-09-21T00:00:00.000Z",
        "tenantId": tenant_id,
        "tenantCode": tenant_code,
    }
    table = get_table()
    response = table.put_item(
        Item={
            "PK": KEY_ACCOUNT,
            "SK": KEY_SUBSCRIPTION + customer_id,
            "GSI1_PK": KEY_SUBSCRIPTION + tenant_code,
            "GSI1_SK": KEY_SUBSCRIPTION + tenant_id,
            "GSI2_PK": KEY_SUBSCRIPTION,
            "GSI2_SK": KEY_SUBSCRIPTION + status,
            "GSI3_PK": KEY_SUBSCRIPTION,
            "GSI3_SK": KEY_SUBSCRIPTION + type,
            "account_subscription_data": account_subscription_data,
        }
    )
    logger.info(response)
    ###############################################################
    customer_id = "002"
    status = "InActive"
    tenant_id = "48748dkldhj938397389331"
    type = "basic"
    tenant_code = "Mc donald india pvt ltd"
    account_subscription_data = {
        "customer": {
            "id": customer_id,
            "name": "Mc donald india pvt ltd",
            "createAt": "2023-09-21T00:00:00.000Z",
            "status": status,
        },
        "users": [
            {
                "id": "001",
                "name": "Branded macholn",
                "emailId": "branded@mc.com",
                "roles": ["Admin", "ContractAdmin"],
                "priviledge": ["ContractRead", "ContractWrite"],
            },
            {
                "id": "002",
                "name": "Steven smith",
                "emailId": "steven@abc.com",
                "roles": ["TempalteAdmin"],
                "privilege": ["TemplateRead", "TemplateWrite"],
            },
        ],
        "type": type,
        "createdAt": "2023-09-21T00:00:00.000Z",
        "expiryDate": "2023-09-21T00:00:00.000Z",
        "startDate": "2023-09-21T00:00:00.000Z",
        "tenantId": tenant_id,
        "tenantCode": tenant_code,
    }
    table = get_table()
    response = table.put_item(
        Item={
            "PK": KEY_ACCOUNT,
            "SK": KEY_SUBSCRIPTION + customer_id,
            "GSI1_PK": KEY_SUBSCRIPTION + tenant_code,
            "GSI1_SK": KEY_SUBSCRIPTION + tenant_id,
            "GSI2_PK": KEY_SUBSCRIPTION,
            "GSI2_SK": KEY_SUBSCRIPTION + status,
            "GSI3_PK": KEY_SUBSCRIPTION,
            "GSI3_SK": KEY_SUBSCRIPTION + type,
            "account_subscription_data": account_subscription_data,
        }
    )
    logger.info(response)


def populate_template_data():
    template_data = {
        "_subCategoryName": "Service Based",
        "_lastModifiedBy": "104",
        "_title": "cloudEQ POA (20230615)",
        "_accessList": [{
            "_email": "shanoon@cloudeq.com",
            "_name": "Shanoon Rob",
            "_src": "https://i.pravatar.cc/300"
        }, {
            "_email": "gayle@cloudeq.com",
            "_name": "Gayle Yost",
            "_src": "https://i.pravatar.cc/300"
        }, {
            "_email": "melissa@cloudeq.com",
            "_name": "Melissa Rowe",
            "_src": "https://i.pravatar.cc/300"
        }],
        "_creationDate": "2023-10-05T09:13:04.739Z",
        "_status": "Draft",
        "_categoryName": "Service Level Agreement",
        "_ownerAccess": "read",
        "_ownerName": "Blake Fisher",
        "_editableDocId": "1006",
        "_approvalType": "freeflow",
        "_approvalList": [{
            "_name": "Shanon Rob",
            "_email": "shanoon@cloudeq.com",
            "_approverId": 0,
            "_id": 102,
            "_approverOrder": 0,
            "_status": -1,
        }, {
            "_name": "Gayle Yost",
            "_email": "gayle@cloudeq.com",
            "_approverId": 0,
            "_id": 103,
            "_approverOrder": 0,
            "_status": -1,
        }],
        "_pdfDocId": {"_type": "", "_s3key": "", "_id": 1006},
        "_id": 1006,
        "_description": "Cloudeq document",
        "_lastModifiedDate": "2023-10-05T09:13:04.739Z",
        "_ownerId": "104",
    }
    table = get_table()
    response = table.put_item(
        Item={
            "PK": KEY_TEMPLATE,
            "SK": KEY_TEMPLATE + "1006",
            "template_data": template_data,
            "GSI1_PK": "TEMPLATE#104",
            "GSI1_SK": "TEMPLATE#2023-10-05T09:13:04.739Z"
        }
    )
    logger.info(response)
    #########################################################
    template_data = {
        "_subCategoryName": "Service Based",
        "_lastModifiedBy": "101",
        "_title": "cloudEQ POA (20230215)",
        "_accessList": [
            {
                "_email": "shanoon@cloudeq.com",
                "_name": "Shanoon Rob",
                "_src": "https://i.pravatar.cc/300"
            }, {
                "_email": "gayle@cloudeq.com",
                "_name": "Gayle Yost",
                "_src": "https://i.pravatar.cc/300"
            }, {
                "_email": "blake@cloudeq.com",
                "_name": "Blake Fisher",
                "_src": "https://i.pravatar.cc/300"
            }
        ],
        "_creationDate": "2023-10-05T09:13:04.739Z",
        "_status": "Draft",
        "_categoryName": "Service Level Agreement",
        "_ownerAccess": "write",
        "_ownerName": "Melissa Rowe",
        "_editableDocId": "10001",
        "_approvalType": "freeflow",
        "_approvalList": [{
            "_name": "Shanon Rob",
            "_email": "shanoon@cloudeq.com",
            "_approverId": 0,
            "_id": 102,
            "_approverOrder": 0,
            "_status": -1,
        }, {
            "_name": "Gayle Yost",
            "_email": "gayle@cloudeq.com",
            "_approverId": 0,
            "_id": 103,
            "_approverOrder": 0,
            "_status": -1,
        }],
        "_pdfDocId": {"_type": "", "_s3key": "", "_id": 10001},
        "_id": 1001,
        "_description": "Cloudeq Service Agrement Document",
        "_lastModifiedDate": "2023-10-06T09:13:04.739Z",
        "_ownerId": "101",
    }
    table = get_table()
    response = table.put_item(
        Item={
            "PK": KEY_TEMPLATE,
            "SK": KEY_TEMPLATE + "1001",
            "template_data": template_data,
            "GSI1_PK": "TEMPLATE#101",
            "GSI1_SK": "TEMPLATE#2023-10-06T09:13:04.739Z"
        }
    )
    logger.info(response)
    #########################################################
    template_data = {
        "_subCategoryName": "Service Based",
        "_lastModifiedBy": "101",
        "_title": "cloudEQ SOW (20230216)",
        "_accessList": [
            {
                "_email": "shanoon@cloudeq.com",
                "_name": "Shanoon Rob",
                "_src": "https://i.pravatar.cc/300"
            }, {
                "_email": "gayle@cloudeq.com",
                "_name": "Gayle Yost",
                "_src": "https://i.pravatar.cc/300"
            }, {
                "_email": "blake@cloudeq.com",
                "_name": "Blake Fisher",
                "_src": "https://i.pravatar.cc/300"
            }
        ],
        "_creationDate": "2023-10-05T09:13:04.739Z",
        "_status": "Published",
        "_categoryName": "Service Level Agreement",
        "_ownerAccess": "write",
        "_ownerName": "Melissa Rowe",
        "_editableDocId": "10002",
        "_approvalType": "freeflow",
        "_approvalList": [{
            "_name": "Shanon Rob",
            "_email": "shanoon@cloudeq.com",
            "_approverId": 0,
            "_id": 102,
            "_approverOrder": 0,
            "_status": -1,
        }, {
            "_name": "Gayle Yost",
            "_email": "gayle@cloudeq.com",
            "_approverId": 0,
            "_id": 103,
            "_approverOrder": 0,
            "_status": -1,
        }],
        "_pdfDocId": {"_type": "", "_s3key": "", "_id": 10002},
        "_id": 1002,
        "_description": "Cloudeq Service Agrement Document",
        "_lastModifiedDate": "2023-10-06T09:13:04.739Z",
        "_ownerId": "101",
    }
    table = get_table()
    response = table.put_item(
        Item={
            "PK": KEY_TEMPLATE,
            "SK": KEY_TEMPLATE + "1002",
            "template_data": template_data,
            "GSI1_PK": "TEMPLATE#101",
            "GSI1_SK": "TEMPLATE#2023-10-06T09:13:04.739Z"
        }
    )
    logger.info(response)
    #########################################################
    template_data = {
        "_subCategoryName": "Multi-Level",
        "_lastModifiedBy": "101",
        "_title": "cloudEQ POA (20230316)",
        "_accessList": [
            {
                "_email": "shanoon@cloudeq.com",
                "_name": "Shanoon Rob",
                "_src": "https://i.pravatar.cc/300"
            }, {
                "_email": "gayle@cloudeq.com",
                "_name": "Gayle Yost",
                "_src": "https://i.pravatar.cc/300"
            }, {
                "_email": "blake@cloudeq.com",
                "_name": "Blake Fisher",
                "_src": "https://i.pravatar.cc/300"
            }
        ],
        "_creationDate": "2023-10-05T09:13:04.739Z",
        "_status": "Draft",
        "_categoryName": "Service Level Agreement",
        "_ownerAccess": "write",
        "_ownerName": "Melissa Rowe",
        "_editableDocId": "10003",
        "_approvalType": "Hierarchical",
        "_approvalList": [{
            "_name": "Shanon Rob",
            "_email": "shanoon@cloudeq.com",
            "_approverId": 1,
            "_id": 102,
            "_approverOrder": 1,
            "_status": 0,
        }, {
            "_name": "Gayle Yost",
            "_email": "gayle@cloudeq.com",
            "_approverId": 2,
            "_id": 104,
            "_approverOrder": 2,
            "_status": 0,
        }],
        "_pdfDocId": {"_type": "", "_s3key": "", "_id": 10003},
        "_id": 1003,
        "_description": "Cloudeq Service Agrement Document",
        "_lastModifiedDate": "2023-10-06T09:13:04.739Z",
        "_ownerId": "101",
    }
    table = get_table()
    response = table.put_item(
        Item={
            "PK": KEY_TEMPLATE,
            "SK": KEY_TEMPLATE + "1003",
            "template_data": template_data,
            "GSI1_PK": "TEMPLATE#101",
            "GSI1_SK": "TEMPLATE#2023-10-06T09:13:04.739Z"
        }
    )
    logger.info(response)
    #########################################################
    template_data = {
        "_subCategoryName": "Multi-Level",
        "_lastModifiedBy": "102",
        "_title": "cloudEQ POA (20230416)",
        "_accessList": [
            {
                "_email": "melisa@cloudeq.com",
                "_name": "Melisa Rowe",
                "_src": "https://i.pravatar.cc/300"
            }, {
                "_email": "gayle@cloudeq.com",
                "_name": "Gayle Yost",
                "_src": "https://i.pravatar.cc/300"
            }, {
                "_email": "blake@cloudeq.com",
                "_name": "Blake Fisher",
                "_src": "https://i.pravatar.cc/300"
            }
        ],
        "_creationDate": "2023-10-05T09:13:04.739Z",
        "_status": "Draft",
        "_categoryName": "Service Level Agreement",
        "_ownerAccess": "write",
        "_ownerName": "Shannon Roob",
        "_editableDocId": "10004",
        "_approvalType": "Hierarchical",
        "_approvalList": [{
            "_name": "Melisa Rowe",
            "_email": "melisa@cloudeq.com",
            "_approverId": 1,
            "_id": 102,
            "_approverOrder": 1,
            "_status": 0,
        }, {
            "_name": "Gayle Yost",
            "_email": "gayle@cloudeq.com",
            "_approverId": 2,
            "_id": 104,
            "_approverOrder": 2,
            "_status": 0,
        }],
        "_pdfDocId": {"_type": "", "_s3key": "", "_id": 10004},
        "_id": 1004,
        "_description": "Cloudeq Service Agrement Document",
        "_lastModifiedDate": "2023-10-06T09:13:04.739Z",
        "_ownerId": "102",
    }
    table = get_table()
    response = table.put_item(
        Item={
            "PK": KEY_TEMPLATE,
            "SK": KEY_TEMPLATE + "1004",
            "template_data": template_data,
            "GSI1_PK": "TEMPLATE#102",
            "GSI1_SK": "TEMPLATE#2023-10-06T09:13:04.739Z"
        }
    )
    logger.info(response)
    #########################################################
    template_data = {
        "_subCategoryName": "Service Based",
        "_lastModifiedBy": "104",
        "_title": "cloudEQ POA (20230715)",
        "_accessList": [{
            "_email": "shanoon@cloudeq.com",
            "_name": "Shanoon Rob",
            "_src": "https://i.pravatar.cc/300"
        }, {
            "_email": "gayle@cloudeq.com",
            "_name": "Gayle Yost",
            "_src": "https://i.pravatar.cc/300"
        }, {
            "_email": "melissa@cloudeq.com",
            "_name": "Melissa Rowe",
            "_src": "https://i.pravatar.cc/300"
        }],
        "_creationDate": "2023-10-05T09:13:04.739Z",
        "_status": "Draft",
        "_categoryName": "Service Level Agreement",
        "_ownerAccess": "read",
        "_ownerName": "Blake Fisher",
        "_editableDocId": "1007",
        "_approvalType": "freeflow",
        "_approvalList": [{
            "_name": "Shanon Rob",
            "_email": "shanoon@cloudeq.com",
            "_approverId": 0,
            "_id": 102,
            "_approverOrder": 0,
            "_status": -1,
        }, {
            "_name": "Gayle Yost",
            "_email": "gayle@cloudeq.com",
            "_approverId": 0,
            "_id": 103,
            "_approverOrder": 0,
            "_status": -1,
        }],
        "_pdfDocId": {"_type": "", "_s3key": "", "_id": 1007},
        "_id": 1007,
        "_description": "Cloudeq document",
        "_lastModifiedDate": "2023-10-05T09:13:04.739Z",
        "_ownerId": "104",
    }
    table = get_table()
    response = table.put_item(
        Item={
            "PK": KEY_TEMPLATE,
            "SK": KEY_TEMPLATE + "1007",
            "template_data": template_data,
            "GSI1_PK": "TEMPLATE#104",
            "GSI1_SK": "TEMPLATE#2023-10-05T09:13:04.739Z"
        }
    )
    logger.info(response)


def populate_category_data():
    category_id = 1
    template_category_data = {
        "id": category_id,
        "name": "Service Level Agreement",
        "parentCategory": "null",
    }
    table = get_table()
    response = table.put_item(
        Item={
            "PK": KEY_TEMPLATE,
            "SK": KEY_CATEGORY + category_id.__str__(),
            "template_category_data": template_category_data,
        }
    )
    logger.info(response)
    #####################################################
    category_id = 2
    template_category_data = {
        "id": category_id,
        "name": "Multi-Level",
        "parentCategory": [{
            "id": 1,
            "name": "Service Level Agreement",
            "parentCategory": "null",
        }],
    }
    table = get_table()
    response = table.put_item(
        Item={
            "PK": KEY_TEMPLATE,
            "SK": KEY_CATEGORY + category_id.__str__(),
            "template_category_data": template_category_data,
        }
    )
    logger.info(response)
    #####################################################
    category_id = 3
    template_category_data = {
        "id": category_id,
        "name": "CRIME",
        "parentCategory": [{
            "id": 1,
            "name": "LAW",
            "parentCategory": "null",
        }],
    }
    table = get_table()
    response = table.put_item(
        Item={
            "PK": KEY_TEMPLATE,
            "SK": KEY_CATEGORY + category_id.__str__(),
            "template_category_data": template_category_data,
        }
    )
    logger.info(response)
    #####################################################
    category_id = 4
    template_category_data = {
        "id": category_id,
        "name": "Statements of Work",
        "parentCategory": "null",
    }
    table = get_table()
    response = table.put_item(
        Item={
            "PK": KEY_TEMPLATE,
            "SK": KEY_CATEGORY + category_id.__str__(),
            "template_category_data": template_category_data,
        }
    )
    logger.info(response)


def populate_favouriteTemplate_data():
    favourite_template_data = {
        "userId": 101,
        "templateFav": [
            {
                "subCategoryName": "Multi-Level",
                "lastModifiedBy": "101",
                "title": "cloudEQ POA (20230316)",
                "accessList": [
                    {
                        "email": "shanoon@cloudeq.com",
                        "name": "Shanoon Rob",
                        "src": "https://i.pravatar.cc/300"
                    },
                    {
                        "email": "gayle@cloudeq.com",
                        "name": "Gayle Yost",
                        "src": "https://i.pravatar.cc/300"
                    },
                    {
                        "email": "blake@cloudeq.com",
                        "name": "Blake Fisher",
                        "src": "https://i.pravatar.cc/300"
                    }
                ],
                "creationDate": "2023-10-05T09:13:04.739Z",
                "status": "Draft",
                "categoryName": "Service Level Agreement",
                "ownerAccess": "write",
                "ownerName": "Melissa Rowe",
                "editableDocId": "10003",
                "approvalType": "Hierarchical",
                "approvalList": [
                    {
                        "name": "Shanon Rob",
                        "email": "shanoon@cloudeq.com",
                        "approverId": 1,
                        "id": 102,
                        "approverOrder": 1,
                        "status": 0
                    },
                    {
                        "name": "Gayle Yost",
                        "email": "gayle@cloudeq.com",
                        "approverId": 2,
                        "id": 104,
                        "approverOrder": 2,
                        "status": 0
                    }
                ],
                "pdfDocId": {
                    "type": "",
                    "s3key": "",
                    "id": 10003
                },
                "id": 1003,
                "description": "Cloudeq Service Agrement Document",
                "lastModifiedDate": "2023-10-06T09:13:04.739Z",
                "ownerId": "101"
            },
            {
                "subCategoryName": "Multi-Level",
                "lastModifiedBy": "102",
                "title": "cloudEQ POA (20230416)",
                "accessList": [
                    {
                        "email": "melisa@cloudeq.com",
                        "name": "Melisa Rowe",
                        "src": "https://i.pravatar.cc/300"
                    },
                    {
                        "email": "gayle@cloudeq.com",
                        "name": "Gayle Yost",
                        "src": "https://i.pravatar.cc/300"
                    },
                    {
                        "email": "blake@cloudeq.com",
                        "name": "Blake Fisher",
                        "src": "https://i.pravatar.cc/300"
                    }
                ],
                "creationDate": "2023-10-05T09:13:04.739Z",
                "status": "Draft",
                "categoryName": "Service Level Agreement",
                "ownerAccess": "write",
                "ownerName": "Shannon Roob",
                "editableDocId": "10004",
                "approvalType": "Hierarchical",
                "approvalList": [
                    {
                        "name": "Melisa Rowe",
                        "email": "melisa@cloudeq.com",
                        "approverId": 1,
                        "id": 102,
                        "approverOrder": 1,
                        "status": 0
                    },
                    {
                        "name": "Gayle Yost",
                        "email": "gayle@cloudeq.com",
                        "approverId": 2,
                        "id": 104,
                        "approverOrder": 2,
                        "status": 0
                    }
                ],
                "pdfDocId": {
                    "type": "",
                    "s3key": "",
                    "id": 10004
                },
                "id": 1004,
                "description": "Cloudeq Service Agrement Document",
                "lastModifiedDate": "2023-10-06T09:13:04.739Z",
                "ownerId": "102"
            }
        ],
        "contractFav": [
            {
                "contractId": "1",
                "contractDesc": "its not a simple template",
                "contractName": "NSA"
            },
            {
                "contractId": "2",
                "contractDesc": "its not a simple template",
                "contractName": "NSA"
            }
        ]
    }
    table = get_table()
    response = table.put_item(
        Item={
            "PK": 'FAVOURITE#',
            "SK": 'FAVOURITE#' + '101',
            "favourite_template_data": favourite_template_data,
        }
    )
    logger.info(response)

def populate_client_create_data():
    client_data ={
      "entityName": "XYZ Corporation",
      "entityLegalName": "XYZ Corporation Legal",
      "entityAddress": "456 Elm Street",
      "stateOfIncorporation": "New York",
      "countryOfIncorporation": "USA",
      "entityType": "Company",
      "registrationId": "r101y6Onkjjbdw799012bjh",
      "entityPhoneNumber": "555-123-4567",
      "entityEmail": "xyz@corporation.com",
      "pocPersonName": "Jane Smith",
      "pocPersonEmail": "jane.smith@xyzcorp.com",
      "pocPersonPhoneNumber": "555-987-6543"
  }
    table = get_table()
    response = table.put_item(
        Item={
             'PK': 'CLIENT#',
             'SK': 'CLIENT#' + 'r101y6Onkjjbdw799012bjh',
             'GSI1_PK': 'CLIENT#' + 'Company',
             'GSI1_SK': 'CLIENT#' + 'xyz@corporation.com',
             'client_data': client_data,
        }
    )
    logger.info(response)

def populate_clause_create_data():
     id="0d228a96-b12c-4635-ac28-572da856194d"
     data ={
        "content":"Grapes are green",
        "sectionId":"acd402b0-e9d2-4e7c-a41c-dbc071ddf8e3",
        "id":id
    }
     table = get_table()
     response = table.put_item(
        Item={
             "PK": 'CLAUSE#',
             "SK": 'CLAUSE#' + id,
             "clause_data": data,
        }
    )
     logger.info(response)

def populate_clause_section_create_data():
     id="acd402b0-e9d2-4e7c-a41c-dbc071ddf8e3"
     data ={
        "name": "Grapes",
        "parentSectionId": "b057f787-b384-412b-bd2f-50c1b31a92b1",
        "id": id
    }
     table = get_table()
     response = table.put_item(
        Item={
              "PK": 'CLAUSE#',
              "SK": KEY_CATEGORY + id,
              "clause_category_data": data
        }
    )
     logger.info(response)


    

def populate_data():
    populate_subscription_data()
    populate_template_data()
    populate_category_data()
    populate_favouriteTemplate_data()
    populate_client_create_data()
    populate_clause_create_data()
    populate_clause_section_create_data()
    print(f"populated table data")


def recreate_all():
    delete_table(DYNAMODB_TABLE_NAME)
    create_table(DYNAMODB_TABLE_NAME)
    populate_data()


if __name__ == "__main__":
    recreate_all()