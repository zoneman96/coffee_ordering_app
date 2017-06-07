                                        User email                  Making admin
Make Admin: db.users.updateOne({email: "admin@admin.com"}, {$set: {"isAdmin": "true"}})