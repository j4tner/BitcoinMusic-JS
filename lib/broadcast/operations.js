"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = [{
  "roles": ["posting"],
  "operation": "vote",
  "params": ["voter", "author", "permlink", "weight"]
}, {
  "roles": ["posting"],
  "operation": "comment",
  "params": ["parent_author", "parent_permlink", "author", "permlink", "title", "body", "json_metadata"]
}, {
  "roles": ["active", "owner"],
  "operation": "transfer",
  "params": ["from", "to", "amount", "memo"]
}, {
  "roles": ["active"],
  "operation": "transfer_to_vesting",
  "params": ["from", "to", "amount"]
}, {
  "roles": ["active"],
  "operation": "withdraw_vesting",
  "params": ["account", "vesting_shares"]
}, {
  "roles": ["active"],
  "operation": "limit_order_create",
  "params": ["owner", "orderid", "amount_to_sell", "min_to_receive", "fill_or_kill", "expiration"]
}, {
  "roles": ["active"],
  "operation": "limit_order_cancel",
  "params": ["owner", "orderid"]
}, {
  "roles": ["active"],
  "operation": "price",
  "params": ["base", "quote"]
}, {
  "roles": ["active"],
  "operation": "feed_publish",
  "params": ["publisher", "exchange_rate"]
}, {
  "roles": ["active"],
  "operation": "convert",
  "params": ["owner", "requestid", "amount"]
}, {
  "roles": ["active"],
  "operation": "account_create",
  "params": ["fee", "creator", "new_account_name", "owner", "active", "basic", "memo_key", "json_metadata"]
}, {
  "roles": ["owner", "active"],
  "operation": "account_update",
  "params": ["account", "owner", "active", "basic", "memo_key", "json_metadata"]
}, {
  "roles": ["active"],
  "operation": "witness_update",
  "params": ["owner", "url", "block_signing_key", "props", "fee"]
}, {
  "roles": ["basic"],
  "operation": "account_witness_vote",
  "params": ["account", "witness", "approve"]
}, {
  "roles": ["posting"],
  "operation": "account_witness_proxy",
  "params": ["account", "proxy"]
}, {
  "roles": ["active"],
  "operation": "pow",
  "params": ["worker", "input", "signature", "work"]
}, {
  "roles": ["active"],
  "operation": "custom",
  "params": ["required_auths", "id", "data"]
}, {
  "roles": ["posting"],
  "operation": "delete_comment",
  "params": ["author", "permlink"]
}, {
  "roles": ["posting", "active"],
  "operation": "custom_json",
  "params": ["required_auths", "required_posting_auths", "id", "json"]
}, {
  "roles": ["posting"],
  "operation": "comment_options",
  "params": ["author", "permlink", "max_accepted_payout", "percent_muse_dollars", "allow_votes", "allow_curation_rewards", "extensions"]
}, {
  "roles": ["active"],
  "operation": "set_withdraw_vesting_route",
  "params": ["from_account", "to_account", "percent", "auto_vest"]
}, {
  "roles": ["active"],
  "operation": "limit_order_create2",
  "params": ["owner", "orderid", "amount_to_sell", "exchange_rate", "fill_or_kill", "expiration"]
}, {
  "roles": ["posting"],
  "operation": "challenge_authority",
  "params": ["challenger", "challenged", "require_owner"]
}, {
  "roles": ["active", "owner"],
  "operation": "prove_authority",
  "params": ["challenged", "require_owner"]
}, {
  "roles": ["active"],
  "operation": "request_account_recovery",
  "params": ["recovery_account", "account_to_recover", "new_owner_authority", "extensions"]
}, {
  "roles": ["owner"],
  "operation": "change_recovery_account",
  "params": ["account_to_recover", "new_recovery_account", "extensions"]
}, {
  "roles": ["active"],
  "operation": "escrow_transfer",
  "params": ["from", "to", "agent", "escrow_id", "mbd_amount", "muse_amount", "fee", "ratification_deadline", "escrow_expiration", "json_meta"]
}, {
  "roles": ["active"],
  "operation": "escrow_dispute",
  "params": ["from", "to", "agent", "who", "escrow_id"]
}, {
  "roles": ["active"],
  "operation": "escrow_release",
  "params": ["from", "to", "agent", "who", "receiver", "escrow_id", "mbd_amount", "muse_amount"]
}, {
  "roles": ["active"],
  "operation": "pow2",
  "params": ["input", "pow_summary"]
}, {
  "roles": ["active"],
  "operation": "escrow_approve",
  "params": ["from", "to", "agent", "who", "escrow_id", "approve"]
}, {
  "roles": ["active"],
  "operation": "transfer_to_savings",
  "params": ["from", "to", "amount", "memo"]
}, {
  "roles": ["active"],
  "operation": "transfer_from_savings",
  "params": ["from", "request_id", "to", "amount", "memo"]
}, {
  "roles": ["active"],
  "operation": "cancel_transfer_from_savings",
  "params": ["from", "request_id"]
}, {
  "roles": ["posting", "active", "owner"],
  "operation": "custom_binary",
  "params": ["id", "data"]
}, {
  "roles": ["owner"],
  "operation": "decline_voting_rights",
  "params": ["account", "decline"]
}, {
  "roles": ["active"],
  "operation": "reset_account",
  "params": ["reset_account", "account_to_reset", "new_owner_authority"]
}, {
  "roles": ["owner", "posting"],
  "operation": "set_reset_account",
  "params": ["account", "current_reset_account", "reset_account"]
}, {
  "roles": ["posting"],
  "operation": "claim_reward_balance",
  "params": ["account", "reward_muse", "reward_mbd", "reward_vests"]
}, {
  "roles": ["active"],
  "operation": "delegate_vesting_shares",
  "params": ["delegator", "delegatee", "vesting_shares"]
}, {
  "roles": ["active"],
  "operation": "account_create_with_delegation",
  "params": ["fee", "delegation", "creator", "new_account_name", "owner", "active", "posting", "memo_key", "json_metadata", "extensions"]
}, {
  "roles": ["active"],
  "operation": "fill_convert_request",
  "params": ["owner", "requestid", "amount_in", "amount_out"]
}, {
  "roles": ["posting"],
  "operation": "comment_reward",
  "params": ["author", "permlink", "payout"]
}, {
  "roles": ["active"],
  "operation": "liquidity_reward",
  "params": ["owner", "payout"]
}, {
  "roles": ["active"],
  "operation": "interest",
  "params": ["owner", "interest"]
}, {
  "roles": ["active"],
  "operation": "fill_vesting_withdraw",
  "params": ["from_account", "to_account", "withdrawn", "deposited"]
}, {
  "roles": ["posting"],
  "operation": "fill_order",
  "params": ["current_owner", "current_orderid", "current_pays", "open_owner", "open_orderid", "open_pays"]
}, {
  "roles": ["posting"],
  "operation": "fill_transfer_from_savings",
  "params": ["from", "to", "amount", "request_id", "memo"]
}, {
  "roles": ["active"],
  "operation": "content",
  "params": ["uploader", "url", "album_meta", "track_meta", "comp_meta", "distributions", "management", "management_threshold", "distributions_comp", "management_comp", "management_threshold_comp", "playing_reward", "publishers_share"]
}, {
  "roles": ["active"],
  "operation": "content_update",
  "params": ["url", "side", "album_meta", "track_meta", "comp_meta", "new_distributions", "new_management", "new_threshold", "new_playing_reward", "new_publishers_share"]
}, {
  "roles": ["active"],
  "operation": "content_approve",
  "params": ["approver", "url"]
}, {
  "roles": ["active"],
  "operation": "content_remove",
  "params": ["url"]
}, {
  "roles": ["active"],
  "operation": "friendship",
  "params": ["who", "whom"]
}, {
  "roles": ["active"],
  "operation": "unfriend",
  "params": ["who", "whom"]
}, {
  "roles": ["active"],
  "operation": "content_reward",
  "params": ["payee", "url", "mbd_payout", "vesting_payout"]
}, {
  "roles": ["active"],
  "operation": "curate_reward",
  "params": ["curator", "url", "mbd_payout", "vesting_payout"]
}, {
  "roles": ["active"],
  "operation": "playing_reward",
  "params": ["platform", "url", "mbd_payout", "vesting_payout"]
}, {
  "roles": ["active"],
  "operation": "streaming_platform_report",
  "params": ["streaming_platform", "consumer", "content", "playlist_creator", "play_time"]
}, {
  "roles": ["active"],
  "operation": "account_streaming_platform_vote",
  "params": ["account", "streaming_platform", "approve"]
}, {
  "roles": ["active"],
  "operation": "streaming_platform_update",
  "params": ["owner", "url", "fee"]
}, {
  "roles": ["active"],
  "operation": "vote",
  "params": ["voter", "url", "weight"]
}, {
  "roles": ["owner"],
  "operation": "balance_claim",
  "params": ["deposit_to_account", "balance_to_claim", "balance_owner_key", "total_claimed"]
}];