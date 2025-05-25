terraform {
  required_version = ">= 1.0.0" # Ensure that the Terraform version is 1.0.0 or higher

  required_providers {
    aws = {
      source = "hashicorp/aws" # Specify the source of the AWS provider
      version = "~> 5.0"        # Use a version of the AWS provider that is compatible with version
    }
  }
}

provider "aws" {
  region   = var.aws_region

}


resource "aws_dynamodb_table" "user_table" {
  name         = "User"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "email"  
  range_key    = "uuid"   

  attribute {
    name = "email"
    type = "S"
  }

  attribute {
    name = "uuid"
    type = "S"
  }

  
  global_secondary_index {
    name            = "UUIDIndex"
    hash_key        = "uuid"
    projection_type = "ALL"
  }


  point_in_time_recovery {
    enabled = true  
  }

  tags = {
    Environment = "production"
    Project     = "electrostore"
  }
}
