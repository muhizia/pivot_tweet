
exports.up = function(knex) {
    return knex.schema
    .createTable('users', function (table) {
        table.bigIncrements('id');
        table.string("id_str");
        table.string("name");
        table.string("screen_name");
        table.string("location");
        table.string("url");
        table.string("description");
        table.boolean("protected").notNullable().defaultTo(0);
        table.bigInteger("followers_count");
        table.bigInteger("friends_count");
        table.bigInteger("listed_count");
        table.bigInteger("favourites_count");
        table.string("utc_offset");
        table.string("time_zone");
        table.boolean("geo_enabled").notNullable().defaultTo(0);
        table.boolean("verified").notNullable().defaultTo(0);
        table.string("statuses_count");
        table.string("lang");
        table.boolean("contributors_enabled").notNullable().defaultTo(0);
        table.boolean("is_translator").notNullable().defaultTo(0);
        table.boolean("is_translation_enabled").notNullable().defaultTo(0);
        table.string("profile_background_color");
        table.string("profile_background_image_url");
        table.string("profile_background_image_url_https");
        table.boolean("profile_background_tile").notNullable().defaultTo(0);
        table.string("profile_image_url");
        table.string("profile_image_url_https");
        table.string("profile_link_color");
        table.string("profile_sidebar_border_color");
        table.string("profile_sidebar_fill_color");
        table.string("profile_text_color");
        table.boolean("profile_use_background_image").notNullable().defaultTo(0);
        table.boolean("default_profile").notNullable().defaultTo(0);
        table.boolean("default_profile_image").notNullable().defaultTo(0);
        table.string("following");
        table.string("follow_request_sent");
        table.string("notifications");
    })
    .createTable('tweets', function(table) {
        table.bigIncrements('id');
        table.timestamps();
        table.string("id_str");
        table.string("text");
        table.string("source");
        table.boolean("truncated").notNullable().defaultTo(0);
        table.bigInteger("in_reply_to_status_id");
        table.string("in_reply_to_status_id_str");
        table.bigInteger("in_reply_to_user_id");
        table.string("in_reply_to_user_id_str");
        table.string("in_reply_to_screen_name");
        table.bigInteger("user").notNullable().references("id").inTable("users").onDelete("CASCADE");
        table.string("geo");
        table.string("coordinates");
        table.string("place");
        table.string("contributors");
        table.bigInteger("retweeted_status");
        table.string("retweet_count");
        table.string("favorite_count");
        // table.bigInteger("entities").notNullable().references("id").inTable("entity_entities").onDelete("CASCADE");
        table.boolean("favorited").notNullable().defaultTo(0);
        table.boolean("retweeted").notNullable().defaultTo(0);
        table.string("filter_level");
        table.string("lang");
    })
    .createTable('indices', function (table) {
        table.bigIncrements('id');
        table.bigInteger('indice');
    })
    .createTable('hashtags', function (table) {
        table.bigIncrements('id');
        table.bigInteger('indice').notNullable().references("id").inTable("indices").onDelete("CASCADE");
        table.string('text');
        table.bigInteger("entities").notNullable().references("id").inTable("tweets").onDelete("CASCADE");
    })
    .createTable('urls', function (table) {
        table.bigIncrements('id');
        table.bigInteger('indice').notNullable().references("id").inTable("indices").onDelete("CASCADE");
        table.string("url") ;
        table.string("expanded_url");
        table.string("display_url");
        table.bigInteger("entities").notNullable().references("id").inTable("tweets").onDelete("CASCADE");
    })
    .createTable('user_mentions', function (table) {
        table.bigIncrements('_id');
        table.bigInteger('indice').notNullable().references("id").inTable("indices").onDelete("CASCADE");
        table.string("screen_name");
        table.string("name");
        table.bigInteger("id");
        table.string("id_str");
        table.bigInteger("entities").notNullable().references("id").inTable("tweets").onDelete("CASCADE");
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTable("users")
    .dropTable("tweets")
    .dropTable("indices")
    .dropTable("hashtags")
    .dropTable("urls")
    .dropTable("user_mentions");
};
